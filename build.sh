#!/usr/bin/env bash
# Build the mdBook and copy SEO assets to the output directory
set -euo pipefail

echo "Building mdBook..."
mdbook build

echo "Copying SEO assets to book/..."
cp robots.txt llms.txt llms-full.txt book/

echo "Generating sitemap..."
bash generate-sitemap.sh

echo "Build complete."
