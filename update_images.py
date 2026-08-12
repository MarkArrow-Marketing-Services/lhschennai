#!/usr/bin/env python3
import re

# Read the file
with open('src/data/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Update serviceCategories with images
# First, check if images are already there
if 'image: doctorConsultationImg' not in content:
    # Replace first category - Women's Health
    content = re.sub(
        r'(id: "womens-health-gynecology",\s+title: "[^"]+",)',
        r'\1\n    image: doctorConsultationImg,',
        content
    )

    # Replace second category - Pregnancy
    content = re.sub(
        r'(id: "pregnancy-maternal-care",\s+title: "[^"]+",)',
        r'\1\n    image: pregnantWomanImg,',
        content
    )

    # Replace third category - Diagnostics
    content = re.sub(
        r'(id: "diagnostics-testing",\s+title: "[^"]+",)',
        r'\1\n    image: niptTestImg,',
        content
    )

    # Replace fourth category - Wellness
    content = re.sub(
        r'(id: "wellness-programs",\s+title: "[^"]+",)',
        r'\1\n    image: yogaWomenImg,',
        content
    )

# Write back
with open('src/data/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('File updated successfully!')
