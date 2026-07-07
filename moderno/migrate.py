"""Migrate all HTML files to modern HTML5 with consolidated JS."""
import re
import os
import glob

html_dir = os.path.dirname(os.path.abspath(__file__))
files = glob.glob(os.path.join(html_dir, "*.html"))

print(f"Found {len(files)} HTML files to process")

for filepath in sorted(files):
    filename = os.path.basename(filepath)
    
    with open(filepath, "r", encoding="utf-8", errors="replace") as f:
        content = f.read()

    original = content

    # 1. Strip Wayback Machine footer comments
    content = re.split(r'\n?<!--\s*\n?\s*FILE ARCHIVED ON', content)[0]
    content = re.split(r'\n?<!--\nplayback timings', content)[0]

    # 2. XHTML doctype -> HTML5
    content = content.replace(
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
        '<!DOCTYPE html>'
    )

    # 3. <html xmlns="..." xml:lang="..." lang="..."> -> <html lang="pt-BR">
    content = re.sub(
        r'<html\s+xmlns="[^"]*"\s+xml:lang="[^"]*"\s+lang="([^"]*)">',
        r'<html lang="\1">',
        content
    )

    # 4. Remove standalone xmlns on html tag
    content = re.sub(
        r'<html\s+xmlns="[^"]*">',
        '<html>',
        content
    )

    # 5. <meta http-equiv="Content-Type" ...> -> <meta charset="UTF-8">
    content = re.sub(
        r'<meta\s+http-equiv="Content-Type"\s+content="[^"]*"\s*/>',
        '<meta charset="UTF-8">',
        content
    )

    # 6. Remove language and type attributes from script tags
    content = re.sub(r'\s+language="JavaScript"', '', content)
    content = re.sub(r'\s+type="text/javascript"', '', content)

    # 7. <link rel="stylesheet" type="text/css" ...> -> <link rel="stylesheet" ...>
    content = re.sub(
        r'<link\s+rel="stylesheet"\s+type="text/css"\s+',
        '<link rel="stylesheet" ',
        content
    )

    # 8. <link ... /> -> <link ...> (self-closing for link tags in HTML5)
    content = re.sub(r'(<(?:link|meta|img|br|hr|input)[^>]*)\s*/>', r'\1>', content)

    # 8b. Remove duplicate empty #breadcrumbs inside #content
    content = re.sub(r'<div id="content">\s*<div id="breadcrumbs">\s*</div>', '<div id="content">', content)

    # 8c. Remove | separators between menu links
    content = re.sub(r'</a>\s*\|\s*<a', '</a> <a', content)

    # 8d. Remove broken contact form vericode images from web.archive
    content = re.sub(
        r'<img[^>]*src="https://web\.archive\.org[^"]*veriword[^"]*"[^>]*>',
        '',
        content
    )

    # 9. Remove all archived script blocks (AdSense, tracking, etc.)
    content = re.sub(
        re.compile(r'<script[^>]*>.*?google_ad_client\s*=.*?</script>', re.DOTALL),
        '',
        content
    )
    content = re.sub(
        re.compile(r'<script[^>]*src="https://web\.archive\.org[^"]*pagead/show_ads\.js[^>]*>.*?</script>', re.DOTALL),
        '',
        content
    )
    content = re.sub(
        re.compile(r'<script[^>]*src="https://web\.archive\.org[^"]*"[^>]*>.*?</script>', re.DOTALL),
        '',
        content
    )

    # 10. Replace old JS references with app.js
    content = re.sub(
        r'<script[^>]*src="assets/scripts/breadcrumbs\.js"[^>]*></script>\s*',
        '',
        content
    )
    content = re.sub(
        r'<script[^>]*src="assets/scripts/ccb/ccb\.js"[^>]*></script>\s*',
        '',
        content
    )
    content = re.sub(
        r'<script\s+src="assets/scripts/search\.js"[^>]*></script>\s*',
        '',
        content
    )

    if 'src="assets/scripts/app.js"' not in content:
        content = content.replace('</head>', '  <script src="assets/scripts/app.js"></script>\n</head>')

    # 11. Clean up double/triple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [OK] {filename}")
    else:
        print(f"  [--] {filename}")

print("\nMigration complete!")
