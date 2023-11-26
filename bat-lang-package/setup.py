from setuptools import setup

setup(
    name='bat-lang',
    version='0.1.3',
    packages=['batlang'],
    install_requires=[
        # list your dependencies here
    ],
    entry_points={
        'console_scripts': [
            'bat-lang = batlang.cli:main',
        ],
    },
)
