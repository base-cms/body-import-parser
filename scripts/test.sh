#!/bin/bash
docker-compose run \
  --rm \
  yarn \
  run test $@
