#!/usr/bin/env python3
import os
import re
import glob

def fix_html_file(file_path):
    """Fix remaining links in HTML file"""
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Fix the home link that still points to archive.org
    content = re.sub(r'<a href="https://web\.archive\.org"', '<a href="index.html"', content)
    
    # Remove any remaining empty lines from cleaning
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Process all HTML files
    html_files = glob.glob('*.html')
    
    for html_file in html_files:
        print(f"Fixing links in {html_file}...")
        fix_html_file(html_file)
    
    print("Link fixing completed!")

if __name__ == "__main__":
    main()

