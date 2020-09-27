# Automation with Gulp

This repo was created as part of course DT173G - Webdevelopment III at Mid Sweden University.
It's a base file-structure for starting new webdevelopment projects. All "work in progress"-files are to be kept under the 'src' folder.
Any edits to project files should be made under 'src', these will automatically be moved to the publication ('pub') folder by Gulp tasks.

## Automated tasks are:
* Concatenating CSS files into one single .css-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Concatenating SASS files into one single .css-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Concatenating JavaScript files into one single .js-file and minimizing files for faster loading. Added sourcemaps for tracking.
* Compressing images from 'src/image'-folder. Creating smaller filesizes for faster loading.
* Browsersync - realtime updates of changes to project during development. Displays in browser.
* Moving all files to 'pub'-folder structure for easy deployment on webserver.

## Required packages
This automated environment uses the following packages:
* **gulp** - Actual system required to run the automated environment.
* **gulp-concat** - Manages concatenation of both CSS and JS files.
* **gulp-imagemin** - Handles compression of images (PNG, JPEG, GIF, SVG)
* **gulp-terser** - Minifies JavaScript and ES6 files.
* **gulp-sourcemaps** - Adds tracking for concatenated CSS and JS files for easy continued development or debugging.
* **gulp-clean-css** - Minifies CSS files.
* **gulp-sass** - Converting SASS to CSS

All packages was picked based on popularity and compatibility. 

## Installation
To install this automated environment locally, follow these steps:
1. Make sure you've got node.js and npm installed.
2. Clone project from repository
```
git clone https://github.com/kiwiguard/gulp_automation.git
```
3. From the directory of your local files run
```
(sudo) npm install
```
4. Start Gulp

Start by running the ```gulp``` command. This will run all *tasks* in predetermined order, create the 'pub'-files and start Browsersync for livereload.
