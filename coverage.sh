#!/bin/bash

set -x

temp_folder=coverage-temp

# bins
babel=./node_modules/babel-cli/bin/babel.js
istanbul=./node_modules/istanbul/lib/cli.js
remap_istanbul=./node_modules/remap-istanbul/bin/remap-istanbul

# create folders
mkdir ./$temp_folder
mkdir ./$temp_folder/src
mkdir ./$temp_folder/test

# compile code, keeping the same structure
node $babel ./src --out-dir ./$temp_folder/src --source-maps > /dev/null
node $babel ./test --out-dir ./$temp_folder/test --source-maps > /dev/null

# run istanbul on the compiled code
node $istanbul cover ./$temp_folder/test/index.js --report=json > /dev/null

# remap istanbul and update coverage.json
rm ./coverage/coverage-final.json
node $remap_istanbul -i ./coverage/coverage.json -o coverage/coverage.json > /dev/null

# generate reporters
node $istanbul report > /dev/null

rm -rf ./$temp_folder
