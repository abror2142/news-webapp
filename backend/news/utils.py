import re
import os
from bs4 import BeautifulSoup


def get_image_path_from_html(html):
    regex = r'<img[^>]+src=["\'](.*?)["\']' # thank you ChatGPT
    return re.findall(regex, html)

def delete_file(file_path):
    if os.path.exists(file_path):
        os.remove(file_path)
        print("File deleted!")
    else:
        print("File not exists!")

def add_host_to_image_paths(data):
    base_url = "http://localhost:8000"
    
    # Add base_url to 'image' field
    if 'image' in data and data['image']:
        data['image'] = f"{base_url}{data['image']}"
    
    # Modify the 'content' field to add base_url to all img src attributes
    if 'content' in data and data['content']:
        soup = BeautifulSoup(data['content'], 'html.parser')
        for img in soup.find_all('img', src=True):
            if img['src'].startswith('/'):
                img['src'] = f"{base_url}{img['src']}"
        data['content'] = str(soup)
    
    return data