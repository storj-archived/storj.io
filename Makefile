VERSION := $(shell utils/version)
export VERSION

BRANCH_NAME ?= $(shell git rev-parse --abbrev-ref HEAD | sed "s!/!-!g")
ifeq (${BRANCH_NAME},master)
TAG ?= ${VERSION}
CLUSTER ?= prod
DEPLOYMENT ?= storj-io
else
TAG ?= ${VERSION}-${BRANCH_NAME}-drafts
CLUSTER ?= nonprod
DEPLOYMENT ?= staging-storj-io
endif


.PHONY: build
ifeq (${BRANCH_NAME},master)
build:
	docker build -t storjlabs/storj.io:${TAG} .
else
build:
	docker build --build-arg hugo_args='-D' -t storjlabs/storj.io:${TAG} .
endif

.PHONY: push
ifeq (${BRANCH_NAME},master)
push:
	docker push storjlabs/storj.io:${TAG}
	docker tag storjlabs/storj.io:${TAG} storjlabs/storj.io:$(shell echo '$${VERSION%.*}')
	docker tag storjlabs/storj.io:${TAG} storjlabs/storj.io:$(shell echo '$${VERSION%%.*}')
	docker push storjlabs/storj.io:$(shell echo '$${VERSION%.*}')
	docker push storjlabs/storj.io:$(shell echo '$${VERSION%%.*}')
else
push:
	docker push storjlabs/storj.io:${TAG}
endif

.PHONY: deploy
deploy:
	kubectl --context ${CLUSTER} -n websites patch deployment ${DEPLOYMENT} \
	-p'{"spec":{"template":{"spec":{"containers":[{"name":"www","image":"storjlabs/storj.io:${TAG}"}]}}}}'

.PHONY: clean
clean:
	-docker rmi storjlabs/storj.io:${TAG}
