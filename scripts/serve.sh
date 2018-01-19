#!/usr/bin/env bash

# Load environment variables from .env file
export $(egrep -v '^#' .env | xargs)

case ${NODE_ENV} in
  production)
    node dist/infrastructure/server/index.js
    ;;
  *)
    ts-node src/infrastructure/server/index.ts
    ;;
esac