"""
TODO: Describe XBlock install
"""
from setuptools import setup


setup(
    name='xblock-{{cookiecutter.short_name}}',
    version='0.1.0',
    description='{{cookiecutter.description}}',
    long_description='{{cookiecutter.description}}',
    author="{{cookiecutter.author_github}}",
    author_email='{{cookiecutter.author_email}}',
    url='https://github.com/{{cookiecutter.author_github}}/xblock-{{cookiecutter.short_name}}',
    license='AGPL-3.0',
    packages=[
        '{{cookiecutter.short_name}}',
    ],
    install_requires=[
        'Django<2.0.0',
        'XBlock',
        'xblock-utils',
    ],
    entry_points={
        'xblock.v1': [
            '{{cookiecutter.short_name}} = {{cookiecutter.short_name}}:{{cookiecutter.class_name}}',
        ],
    },
    package_dir={
        '{{cookiecutter.short_name}}': '{{cookiecutter.short_name}}',
    },
    package_data={
        '': [
            'package.json',
        ],
        "{{cookiecutter.short_name}}": [
            'public/*',
        ],
    },
    classifiers=[
        # https://pypi.python.org/pypi?%3Aaction=list_classifiers
        'Intended Audience :: Developers',
        'Intended Audience :: Education',
        'License :: OSI Approved :: GNU Affero General Public License v3',
        'Operating System :: OS Independent',
        'Programming Language :: JavaScript',
        'Programming Language :: Python',
        'Topic :: Education',
        'Topic :: Internet :: WWW/HTTP',
    ],
    test_suite='{{cookiecutter.short_name}}.tests',
)
