import subprocess
import sys
modules = ['requests', 'Pillow']
for module in modules:
    print('success')
    if module in sys.modules is False:
        print('Installing {}'.format(module))
        subprocess.call([sys.executable, '-m', 'pip', 'install', module])
sys.stdout.flush()

