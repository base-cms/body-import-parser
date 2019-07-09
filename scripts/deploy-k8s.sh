#!/bin/bash
set -e
./scripts/deploy-notify-start.sh
IMAGE=basecms/body-import-parser:$1
yarn global add @endeavorb2b/rancher2cli
r2 dl basecms-service body-import-parser $IMAGE --namespace=default
./scripts/deploy-notify.sh
