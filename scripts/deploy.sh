  
#!/usr/bin/env sh

set -e

cd packages/el-table-next-docs
npm run docs:build

cd docs/.vitepress/dist
pwd

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:jackluson/el-table-next.git main:gh-pages

# cd -
