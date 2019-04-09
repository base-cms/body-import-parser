#!/bin/bash
docker-compose run \
  --rm \
  yarn \
  run coverage $@
