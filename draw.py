import shutil
import requests
from PIL import *
import sys

# Draws user avatar in a meme format )
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
elif sys.argv[1] == 'distort':
    r = requests.get(sys.argv[2], headers={'User-Agent': 'Mozilla/5.0'}, stream=True)
    if r.status_code == 200:
        # Download the raw image and copy it to a file
        with open('images/in.png', 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)
    img = Image.open('images/in.png', 'r')
    mesh = [[(0, 0, 160, 120), [0, 29, 29, 102, 186, 120, 146, 0]],
 [(160, 0, 320, 120), [146, 0, 186, 120, 327, 127, 298, 48]],
 [(320, 0, 480, 120), [298, 48, 327, 127, 463, 77, 492, 26]],
 [(480, 0, 640, 120), [492, 26, 463, 77, 640, 80, 605, 0]],
 [(0, 120, 160, 240), [29, 102, 9, 241, 162, 245, 186, 120]],
 [(160, 120, 320, 240), [186, 120, 162, 245, 339, 214, 327, 127]],
 [(320, 120, 480, 240), [327, 127, 339, 214, 513, 284, 463, 77]],
 [(480, 120, 640, 240), [463, 77, 513, 284, 607, 194, 640, 80]],
 [(0, 240, 160, 360), [9, 241, 27, 364, 202, 365, 162, 245]],
 [(160, 240, 320, 360), [162, 245, 202, 365, 363, 315, 339, 214]],
 [(320, 240, 480, 360), [339, 214, 363, 315, 453, 373, 513, 284]],
 [(480, 240, 640, 360), [513, 284, 453, 373, 640, 319, 607, 194]],
 [(0, 360, 160, 480), [27, 364, 33, 478, 133, 480, 202, 365]],
 [(160, 360, 320, 480), [202, 365, 133, 480, 275, 480, 363, 315]],
 [(320, 360, 480, 480), [363, 315, 275, 480, 434, 469, 453, 373]],
 [(480, 360, 640, 480), [453, 373, 434, 469, 640, 462, 640, 319]]]
    img = img.transform(img.size, Image.MESH, mesh)
    img.save('images/out-trans.jpg')
    print("Image created...")
    sys.stdout.flush()
