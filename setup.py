from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in work_complete/__init__.py
from work_complete import __version__ as version

setup(
	name="work_complete",
	version=version,
	description="This application describes about the work to be complete",
	author="MeghanaEA",
	author_email="meghana.ea@negentropysolutions.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
