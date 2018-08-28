#!/bin/bash

PROJECT_NAME=$1
RESOURCE_TYPE=$2
CONTAINER=$3

kubectl config set-cluster storj-nonprod
kubectl --namespace storj-staging patch $RESOURCE_TYPE $PROJECT_NAME -p"{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"$PROJECT_NAME\",\"image\":\"$CONTAINER\"}]}}}}"
