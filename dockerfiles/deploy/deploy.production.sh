#!/bin/bash

PROJECT_NAME=$1
RESOURCE_TYPE=$2
CONTAINER=$3

kubectl config set-cluster storj-prod
kubectl --namespace storj-prod patch $RESOURCE_TYPE $PROJECT_NAME -p"{\"spec\":{\"template\":{\"spec\":{\"containers\":[{\"name\":\"$PROJECT_NAME\",\"image\":\"$CONTAINER\"}]}}}}"
