#![no_main]

use delta_domain_sdk::{
    base::verifiable::{
        VerifiableType, VerifiableWithDiffs, VerificationContext, debit_allowance::AllowanceAmount,
    },
    proving::local_laws::{LocalLaws, LocalLawsError},
};

#[derive(serde::Serialize, serde::Deserialize)]
struct Amounts {
    pub min: u64,
    pub max: u64,
}

/// A local law that only allows transfers up to a given amount
#[derive(Debug, Copy, Clone, Default)]
struct MaxAmountLaw;

impl LocalLaws for MaxAmountLaw {
    type Input<'a> = Amounts;

    fn validate<'a>(
        transactions: &[VerifiableWithDiffs],
        _context: &VerificationContext,
        input: &Amounts,
    ) -> Result<(), LocalLawsError> {
        for tx in transactions {
            if let VerifiableType::DebitAllowance(debit_allowance) = &tx.verifiable {
                for (&token_kind, amount) in &debit_allowance.payload().content().allowances {
                    if let AllowanceAmount::Fungible(amount) = amount
                        && (*amount > input.max || *amount < input.min)
                    {
                        return Err(LocalLawsError::new(format!(
                            "Debit amount for token {token_kind} must be between {min_spending} and {max_spending}, was {amount}"
                        )));
                    }
                }
            }
        }
        Ok(())
    }
}

const AMOUNTS: Amounts = Amounts { min: 10, max: 100 };

sp1_zkvm::entrypoint!(main);
fn main() {
    // conform to the standard input format
    let verifiables = sp1_zkvm::io::read::<Vec<VerifiableWithDiffs>>();
    let verification_context = sp1_zkvm::io::read::<VerificationContext>();

    MaxAmountLaw::validate(&verifiables, &verification_context, &AMOUNTS)
        .expect("The local laws are not satisfied by the verifiables.");

    // committing the inputs
    sp1_zkvm::io::commit(&verifiables);
    sp1_zkvm::io::commit(&verification_context);
}
