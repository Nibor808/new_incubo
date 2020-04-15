#!/bin/bash

export DEPLOY_MODE=production

mkdir ./dist

echo "/*** Starting Production Build... ***/"
echo "/*** DEPLOY_MODE ---> production ***/"

CP_IMAGES="cp -a ./src/styles/images dist/"
CP_PACKAGE="cp ./package.json dist/"

WEBPACK_SERVER_CMD="webpack --config webpack.server.js --watch --info-verbosity verbose --display-error-details"
WEBPACK_CLIENT_CMD="webpack --config webpack.client.js --watch --info-verbosity verbose --display-error-details"

parallelshell "$WEBPACK_CLIENT_CMD" "$WEBPACK_SERVER_CMD" "$CP_IMAGES" "$CP_PACKAGE"

exit 0
