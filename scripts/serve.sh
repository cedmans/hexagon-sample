#!/usr/bin/env bash

# Load environment variables from .env file
export $(egrep -v '^#' .env | xargs)

case ${NODE_ENV} in
  production)
    set -x
    node dist/infrastructure/server/index.js
    ;;
  *)
    set -x
    ts-node src/infrastructure/server/index.ts
    ;;
esac