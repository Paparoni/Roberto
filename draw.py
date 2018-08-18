import shutil
import requests
from PIL import Image
import sys

# Draws user avatar in a meme format  ( ͡° ͜ʖ ͡°)
# Request the user profile image from discord and send with a Mozilla header or else you'll get a 403 Forbidden error
if sys.argv[1] == 'sparrow':
    r = requests.get(sys.argv[2], headers={'User-Agent': 'Mozilla/5.0'}, stream=True)
    if r.status_code == 200:
        # Download the raw image and copy it to a file
        with open('images/in.png', 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)
    background = Image.open('images/sparrow.jpg', 'r')
    img = Image.open('images/in.png', 'r')
    offset = 70, 250
    background.paste(img, offset)
    background.save('images/out.png')
    print("Image created...")
    sys.stdout.flush()
