#!/bin/bash

for TAG in "$@"; do
  TAG_PARAMS+=" -t storjlabs/storj.io:${TAG}"
done

echo "Building with TAG_PARAMS: ${TAG_PARAMS}"

docker build ${TAG_PARAMS} -f ./dockerfiles/storj.io.dockerfile .
result=$?

if [[ $result != 0 ]]; then
  echo "Error building docker image"
  exit 1
fi

echo "Success..."
exit 0
