# delta Quickstart

## Configure

Set the right values in [`domain.yaml`](./domain.yaml).

## Run Domain

Run the generic domain service:

```sh
./run_domain.sh
```

## Setup TypeScript

In another terminal:

```
npm install
```

Generate some private keys to get started:

```
./keygen.ts
```

## Mint a new token

You can change the details of the token by editing [`mint.ts`](./mint.ts).

```
./mint.ts
```

## Transfer token with a debit

You can change the details of the transfer by editing
[`debit.ts`](./debit.ts).

```
./debit.ts
```
