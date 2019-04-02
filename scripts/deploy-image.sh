#!/bin/bash
set -e
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -q -t "body-import-parser:$1" .

docker tag "body-import-parser:$1" "basecms/body-import-parser:$1"
docker push "basecms/body-import-parser:$1"
docker image rm "body-import-parser:$1"
