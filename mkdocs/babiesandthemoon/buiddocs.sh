#!/bin/bash

#Script per Crear la documentació estàtica i pujar a Git.

# Variables
DIR=~/git/isaacmuro.github.io

#Building Babies And The Moon site
echo 'Building Babies.......'
mkdocs build --clean -d $DIR/docs/babiesandthemoon

echo 'Uploading changes to git'
git add $DIR/docs/babiesandthemoon/*
git commit -m "Automated script uploaded web"
git push origin master

echo '#####################################'
echo 'Done!'
