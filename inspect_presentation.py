import os, glob, xml.etree.ElementTree as ET

slides_dir = r'd:\Saisri\ppt_extracted\ppt\slides'
rels_dir = r'd:\Saisri\ppt_extracted\ppt\slides\_rels'

slide_files = sorted(glob.glob(os.path.join(slides_dir, 'slide*.xml')), 
                     key=lambda x: int(os.path.basename(x).replace('slide','').replace('.xml','')))

for sf in slide_files:
    s_num = os.path.basename(sf).replace('slide','').replace('.xml','')
    tree = ET.parse(sf)
    texts = [elem.text.strip() for elem in tree.getroot().iter('{http://schemas.openxmlformats.org/drawingml/2006/main}t') if elem.text and elem.text.strip()]
    
    rel_file = os.path.join(rels_dir, os.path.basename(sf) + '.rels')
    images = []
    if os.path.exists(rel_file):
        rel_tree = ET.parse(rel_file)
        for rel in rel_tree.getroot():
            target = rel.attrib.get('Target', '')
            if 'media/' in target:
                images.append(os.path.basename(target))
                
    print(f"Slide {int(s_num):2d}: Text: {' | '.join(texts)} -> Images: {images}")

