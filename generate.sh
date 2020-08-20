#!/bin/bash
set -e

if [[ "$(docker images -q watermark:watermark 2> /dev/null)" == "" ]]; then
  echo "## build the Docker Image"
  docker build --tag watermark:watermark .
fi

docker run --rm --name test-watermark -v "$PWD":/application watermark:watermark node index.js
