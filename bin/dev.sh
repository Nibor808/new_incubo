#!/bin/bash

export NODE_ENV=development

mkdir ./build-dev

echo "/*** Starting DEV build... ***/"
echo "/*** NODE_ENV ---> development ***/"

CP_IMAGES="cp -a ./src/styles/images build-dev/"

WEBPACK_SERVER_CMD="webpack --config webpack.server.js --watch --info-verbosity verbose --display-error-details"
WEBPACK_CLIENT_CMD="webpack --config webpack.client.js --watch --info-verbosity verbose --display-error-details"

parallelshell "$WEBPACK_CLIENT_CMD" "$WEBPACK_SERVER_CMD" "$CP_IMAGES"

exit 0
