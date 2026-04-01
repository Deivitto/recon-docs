#!/usr/bin/env bash
# Build the mdBook and copy SEO assets to the output directory
set -euo pipefail

echo "Generating last-modified timestamps..."
echo "{" > /tmp/lastmodified_parts.txt
first=true
for f in src/**/*.md; do
  page="${f#src/}"
  page="${page%.md}.html"
  date=$(git log -1 --format='%aI' -- "$f" 2>/dev/null | cut -dT -f1)
  [ -z "$date" ] && date=$(date -u +"%Y-%m-%d")
  if $first; then
    first=false
  else
    echo "," >> /tmp/lastmodified_parts.txt
  fi
  printf '  "%s": "%s"' "$page" "$date" >> /tmp/lastmodified_parts.txt
done
echo "" >> /tmp/lastmodified_parts.txt
echo "}" >> /tmp/lastmodified_parts.txt
mv /tmp/lastmodified_parts.txt lastmodified.json

echo "Cleaning stale output..."
rm -rf book

echo "Building mdBook..."
mdbook build

echo "Copying SEO assets to book/..."
cp robots.txt llms.txt llms-full.txt lastmodified.json book/

echo "Generating sitemap..."
bash generate-sitemap.sh

echo "Build complete."
