# Restoran Review App

## About App

This is a Udacity's Front-end developer project number 5. 

## Specification

The app is usable on computer and mobile devices.
It works offline if you already visited content in it.
It also includes accessibility features (for screen reader users).

## How to open the app?

1. Unpack everything in an empty folder.
Start up a HTTP server to serve up the site files on your local computer with Python.
For most people, it's already installed on your computer.
    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
    * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. Open the app in the browser: `http://localhost:8000`.

## What was going on

I was provided with a starting code. It already had maps implemented so I just assigned the key to work.
We had to make a responsive site so lot of changes were made to css.
The changes made in html files were to implement focus and screen reader features.
SW file (service worker) was created from scratch.
