export COPYRIGHTLEN=13
find . -type d -name "node_modules" -prune -o -type d -name "dist" -prune -o -name "*.ts" -print0 | xargs -0 ./copyrightadd.sh
find . -type d -name "node_modules" -prune -o -type d -name "dist" -prune -o -name "*.tsx" -print0 | xargs -0 ./copyrightadd.sh