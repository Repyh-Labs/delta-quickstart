#!/usr/bin/env bash

if ! command -v docker &> /dev/null; then
  echo "Error: docker not installed. Get it from https://docs.docker.com/get-docker/"
  exit 1
fi

if [ ! -f keys/domain_key.json ]; then
  echo "Error: keys/domain_key.json not found. Run ./keygen.ts first."
  exit 1
fi

docker run \
  -p 3000:3000 \
  -v $(pwd)/domain.yaml:/app/domain.yaml \
  -v $(pwd)/keys/domain_key.json:/app/domain_key.json \
  ghcr.io/repyh-labs/delta-generic-domain:0.6.8