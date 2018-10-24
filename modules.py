import subprocess
import sys
import os
modules = ['requests', 'Pillow', 'image']
for module in modules:
    print('success')
    if module in sys.modules is False:
        print('Installing {}'.format(module))
        subprocess.call([sys.executable, '-m', 'pip', 'install', module])

if os.path.isfile('./roberto.bat') == False:
    cwd = os.getcwd()
    bat = open("roberto.bat","w+")
    bat.write("cd {}\n".format(cwd))
    bat.write("node roberto.js")
    bat.close()

sys.stdout.flush()

