import shutil
from pathlib import Path

ROOT = Path(__file__).parent.parent
NAME = ROOT / "resourcepacks/@insomnia"

shutil.make_archive(NAME, "zip", NAME)
shutil.rmtree(NAME)
