#!/usr/bin/env bash
# Generate sitemap.xml from built mdBook HTML files
set -euo pipefail

BOOK_DIR="${1:-./book}"
BASE_URL="https://book.getrecon.xyz"
OUTPUT="$BOOK_DIR/sitemap.xml"
FALLBACK=$(date -u +"%Y-%m-%d")

cat > "$OUTPUT" <<HEADER
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
HEADER

find "$BOOK_DIR" -name '*.html' -not -name '404.html' -not -path '*/print.html' | sort | while read -r file; do
  path="${file#"$BOOK_DIR"}"
  # Try to get per-file git date from source .md
  src_file="src${path%.html}.md"
  if [ -f "$src_file" ]; then
    lastmod=$(git log -1 --format='%aI' -- "$src_file" 2>/dev/null | cut -dT -f1)
  fi
  lastmod="${lastmod:-$FALLBACK}"
  cat >> "$OUTPUT" <<ENTRY
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
ENTRY
done

cat >> "$OUTPUT" <<FOOTER
</urlset>
FOOTER

echo "Sitemap generated at $OUTPUT with $(grep -c '<url>' "$OUTPUT") URLs"
