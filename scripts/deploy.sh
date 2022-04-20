#!/usr/bin/env sh
set -e

cd packages/el-table-next-docs

npm run docs:build

cd docs/.vitepress/dist
pwd


if [ ! -n "$1" ] ;then
    echo "the deploy platform is github"
    git init
    git add -A
    git commit -m 'deploy'
    git push -f git@github.com:jackluson/el-table-next.git main:gh-pages
else
    echo "the deploy platform is $1"
    # platform=$1
    # echo -e "platform: $platform"
fi
cd -

