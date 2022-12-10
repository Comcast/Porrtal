#!/bin/bash

## Solution found as part of this stackoverflow discussion: https://stackoverflow.com/questions/151677/tool-for-adding-license-headers-to-source-files
##     find <SOURCE_CODE_DIRECTIRY> -type d -name "<EXCLUDE_DIRECTORY>" -prune -o -name "*.js" -print0 | xargs -0 ./addcopyright.sh
##     find ./porrtal -type d -name "node_modules" -prune -o -name "*.ts" -print0 | xargs -0 ./addcopyright.sh
##     find ./porrtal -type d -name "node_modules" -prune -o -name "*.js" -print0 | xargs -0 ./addcopyright.sh

for x in $*; do  
if [[ "$x" == *.d.ts ]]
then
  continue
fi
diff <(head -n $COPYRIGHTLEN $x) <(head -n $COPYRIGHTLEN copyright.txt) || ( cat copyright.txt > /tmp/file;  cat $x >> /tmp/file; 
mv /tmp/file $x )  
echo $x
done 
