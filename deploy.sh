#!/usr/bin/env sh

cd atomic-categorizer

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist
