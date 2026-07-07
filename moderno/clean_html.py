#!/usr/bin/env python3
import os
import re
import glob

def clean_html_file(file_path):
    """Remove Wayback Machine elements from HTML file"""
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Remove Wayback Machine scripts and toolbar
    content = re.sub(r'<script src="//archive\.org/includes/athena\.js".*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script type="text/javascript">window\.addEventListener.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script type="text/javascript" src="https://web-static\.archive\.org.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script>window\.RufflePlayer.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<script type="text/javascript">.*?__wm\.wombat.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<link rel="stylesheet" type="text/css" href="https://web-static\.archive\.org.*?/>', '', content)
    content = re.sub(r'<!-- End Wayback Rewrite JS Include -->', '', content)
    content = re.sub(r'<!-- BEGIN WAYBACK TOOLBAR INSERT -->.*?<!-- END WAYBACK TOOLBAR INSERT -->', '', content, flags=re.DOTALL)
    
    # Remove base tag with archive.org
    content = re.sub(r'<base href="https://web\.archive\.org/web/\d+/http://www\.curadente\.com/"></base>', '', content)
    
    # Fix URLs - remove Wayback Machine prefixes
    content = re.sub(r'/web/\d+im_/http://www\.curadente\.com/', '', content)
    content = re.sub(r'/web/\d+cs_/http://www\.curadente\.com/', '', content)
    content = re.sub(r'/web/\d+js_/http://www\.curadente\.com/', '', content)
    content = re.sub(r'/web/\d+/http://www\.curadente\.com/', '', content)
    content = re.sub(r'https://web\.archive\.org/web/\d+/http://www\.curadente\.com/', '', content)
    
    # Fix relative links
    content = re.sub(r'href="/web/\d+/http://www\.curadente\.com/', 'href="', content)
    content = re.sub(r'src="/web/\d+im_/http://www\.curadente\.com/', 'src="', content)
    
    # Remove any remaining archive.org references
    content = re.sub(r'https://web-static\.archive\.org/[^"\']*', '', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Process all HTML files
    html_files = glob.glob('*.html')
    
    for html_file in html_files:
        print(f"Cleaning {html_file}...")
        clean_html_file(html_file)
    
    print("HTML cleaning completed!")

if __name__ == "__main__":
    main()

