#!/usr/bin/env python3
import re

# Read the file
with open('src/data/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Map of service slugs to images
service_images = {
    'fetal-medicine-in-utero-interventions': 'fetalMedicineImg',
    'pregnancy-scans-advanced-ultrasound': 'ultrasoundImg',
    'high-risk-pregnancy-fetal-medicine': 'pregnantWindowImg',
    'premarital-sexual-health-counselling': 'doctorConsultationImg',
    'hysteroscopy-advanced-uterine-care': 'gynecologicalImg',
    'fertility-preconception-care': 'doctorConsultationImg',
    'gynecology-minimally-invasive-surgery': 'gynecologicalImg',
}

# Add images to detailedServices
for slug, image in service_images.items():
    # Look for the service with this slug and add image if not already present
    pattern = rf'(slug: "{slug}",\s+title: "[^"]+",)'
    if f'slug: "{slug}"' in content:
        # Check if image already exists for this slug
        slug_section = re.search(rf'slug: "{slug}"[^{{]*?combines:', content, re.DOTALL)
        if slug_section and f'image: {image}' not in slug_section.group():
            replacement = rf'\1\n    image: {image},'
            content = re.sub(pattern, replacement, content)

# Write back
with open('src/data/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('All insight categories updated with images!')
