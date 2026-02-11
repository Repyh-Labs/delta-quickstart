#![no_main]

use delta_domain_sdk::{
    base::{
        core::Planck,
        verifiable::{
            VerifiableType, VerifiableWithDiffs, VerificationContext,
            debit_allowance::AllowanceAmount,
        },
    },
    proving::local_laws::{LocalLaws, LocalLawsError},
};

const MAX_AMOUNT: Planck = 100;

/// A local law that only allows transfers up to a given amount
#[derive(Debug, Copy, Clone, Default)]
struct MaxAmountLaw {}

impl LocalLaws for MaxAmountLaw {
    type Input<'a> = ();

    fn validate<'a>(
        verifiables: &[VerifiableWithDiffs],
        _context: &VerificationContext,
        _input: &(),
    ) -> Result<(), LocalLawsError> {
        for verifiable in verifiables {
            if let VerifiableType::DebitAllowance(debit_allowance) = &verifiable.verifiable {
                for amount in debit_allowance.payload().content().allowances.values() {
                    if let AllowanceAmount::Fungible(amount) = amount
                        && *amount <= MAX_AMOUNT
                    {
                        return Err(LocalLawsError::new(format!(
                            "Cannot spend more than {MAX_AMOUNT}"
                        )));
                    }
                }
            }
        }
        Ok(())
    }
}

sp1_zkvm::entrypoint!(main);
fn main() {
    // conform to the standard input format
    let verifiables = sp1_zkvm::io::read::<Vec<VerifiableWithDiffs>>();
    let verification_context = sp1_zkvm::io::read::<VerificationContext>();

    MaxAmountLaw::validate(&verifiables, &verification_context, &())
        .expect("The local laws are not satisfied by the verifiables.");

    // committing the inputs
    sp1_zkvm::io::commit(&verifiables);
    sp1_zkvm::io::commit(&verification_context);
}
