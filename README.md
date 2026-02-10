# delta Quickstart

## Setup

```sh
npm install
```

Generate some private keys to get started:

```sh
./keygen.ts
```

## Run Domain

Set the right values in [`domain.yaml`](./domain.yaml) and run the generic
domain service:

```sh
./run_domain.sh
```

## Mint a new token

You can change the details of the token by editing [`mint.ts`](./mint.ts).

```sh
./mint.ts
```

## Transfer token with a debit

You can change the details of the transfer by editing
[`debit.ts`](./debit.ts).

```sh
./debit.ts
```

## See result

To finish, see the vaults of the generated keys with their
funds:

```sh
./vaults.ts
```
