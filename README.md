# delta Quickstart

## Configure

Set the right values in [`domain.yaml`](./domain.yaml).

## Run Domain

Run the generic domain service:

```sh
./run_domain.sh
```

## Setup TypeScript

```
npm install
```

Then, generate some private keys to get started:

```
npm run keygen
```

## Mint a new token

```
npm run mint
```

You can change the details of the token by editing [`mint.ts`](./src/mint.ts).

## Transfer token with a debit

```
npm run debit
```

You can change the details of the transfer by editing
[`debit.ts`](./src/debit.ts).
