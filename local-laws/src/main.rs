#![no_main]

use bincode::serde::decode_from_slice;
use delta_local_laws::{
    LocalLaws, LocalLawsError,
    verifiable::types::{
        VerifiableType, VerifiableWithDiffs, VerificationContext, debit_allowance::AllowanceAmount,
    },
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
    // Must be Vec<u8> for usage with the delta-generic-domain docker image
    type Input<'a> = Vec<u8>;

    fn validate<'a>(
        transactions: &[VerifiableWithDiffs],
        _context: &VerificationContext,
        input: &Self::Input<'a>,
    ) -> Result<(), LocalLawsError> {
        let (Amounts { min, max }, _) = decode_from_slice(input, bincode::config::standard())
            .map_err(|e| LocalLawsError::new(format!("Could not deserialize input: {e}")))?;

        for tx in transactions {
            if let VerifiableType::DebitAllowance(debit_allowance) = &tx.verifiable {
                for (&token_kind, allowance) in &debit_allowance.payload().content().allowances {
                    if let AllowanceAmount::Fungible(amount) = allowance
                        && (*amount < min || max < *amount)
                    {
                        return Err(LocalLawsError::new(format!(
                            "Debit amount for token {token_kind} must be between {min} and {max}, was {amount}",
                        )));
                    }
                }
            }
        }
        Ok(())
    }
}

delta_local_laws::entrypoint!(MaxAmountLaw);
