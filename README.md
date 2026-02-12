# delta Quickstart

### Setup

1. Install dependencies
   ```sh
   npm install
   ```
2. Generate private keys for test users and token mint vaults
   ```sh
   ./keygen.ts
   ```

### Run the generic domain

In another terminal, run the below to

- run the the generic domain docker image using a default configuration and mock
  network defined in `domain.yaml`
- start listening for incoming transactions to the domain

```sh
./run_domain.sh
```

### Submit user-level transactions

To **mint a new fungible token** on the domain, run the below to

- use the fungible token mint details defined in `mint.ts` to create a mint transaction
- use the pre-generated mint key to sign this transaction
- submit the signed message to the domain for execution

```sh
./mint.ts
```

To **transfer tokens between users**, run the below to

- use the debit allowance details defined in `debit.ts` to create a debit transaction
- use a pre-generated user key to sign this transaction
- submit the signed message to the domain for execution

```sh
./debit.ts
```

To **view the vaults** and contents on the domain, run

```sh
./vaults.ts
```
