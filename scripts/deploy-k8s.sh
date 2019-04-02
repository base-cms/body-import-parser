#!/bin/bash
set -e

IMAGE=basecms/body-import-parser:$1
yarn global add @endeavorb2b/rancher2cli
r2 dl basecms-service body-import-parser $IMAGE --namespace=imports
