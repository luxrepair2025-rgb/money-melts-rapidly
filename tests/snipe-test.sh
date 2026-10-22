#!/bin/bash
# Headless test: a last-second snipe must be countered by an AI still under its ceiling.
cd "$(dirname "$0")/.." && T=$(mktemp --suffix=.html -p .) && trap "rm -f $T" EXIT
python3 -c "import sys;s=open('index.html').read();j=open('tests/snipe-test.js').read();i=s.rindex('</body>');open(sys.argv[1],'w').write(s[:i]+'<script>'+j+'</script>'+s[i:])" "$T"
google-chrome --headless=new --no-sandbox --disable-gpu --virtual-time-budget=15000 --dump-dom "file://$PWD/$T" 2>/dev/null | grep -o 'data-\(res\|err\)="[^"]*"'
