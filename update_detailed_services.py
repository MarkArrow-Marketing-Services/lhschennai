#!/usr/bin/env python3
import re

# Read the file
with open('src/data/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Map of service slugs to images
service_images = {
    'holistic-pregnancy-wellness': 'yogaWomenImg',
    'laboratory-clinical-testing': 'clinicalLabsImg',
    'advanced-genetic-prenatal-testing': 'niptTestImg',
    'diagnostic-imaging-scan-services': 'ultrasoundImg',
}

# Add images to detailedServices
for slug, image in service_images.items():
    # Look for the service with this slug
    pattern = rf'(slug: "{slug}",\s+title: "[^"]+",)'
    replacement = rf'\1\n    image: {image},'
    content = re.sub(pattern, replacement, content)

# Write back
with open('src/data/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('DetailedServices updated successfully!')
