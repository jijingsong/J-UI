#!/bin/env bash

yarn doc
git checkout website-page
mv -f doc/* ./
git add .
git commit -m "update"
git push
git checkout -