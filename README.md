# Shishir-2020

Shishir 2020 - NIT Meghalaya's Cultural Festival

---

## Getting Started

1. Clone the "working" branch. If on master branch already, run: 
    `git pull origin working` in the terminal
2. Switch to working branch by runnning:
    `git checkout working`
3. Make changes and push into this branch only. 
## DO NOT WORK IN THE MASTER BRANCH 
4. run `yarn install` if freshly cloned.

---

## Running the application for development

1. Run `yarn dev`
2. Go to `localhost:3000` in your browser

---

## Running the application to check if deployable

1. Run `yarn build` to build the project
2. After building, run: `yarn start`
3. Go to the specified url (usually localhost:3000)
4. If there are no errors, then the branch is deployable.

---

## Merging working branch to master branch

1. Before merging the 'working' branch to the 'master' branch, the /lib/absoluteUrl.js file must be changed
**Uncomment:**
`const origin = "https://shishir2020.herokuapp.com"`
and 
`const url = origin + path;`
**Comment:** `const url = "http://localhost:3000" + path;`
2. Switch to the master branch. run: `git checkout master`
3. Merge the working branch to master: `git merge working`
4. Commit and push the changes. Wait for a few minutes while HEROKU builds the project, then visit the website to view changes.

---
 
## NOTE : DO NOT USE NPM!!! IT WILL BREAK THE APPLICATION

---

## IMPORTANT NOTE: IMPLEMENTING SERVER-SIDE RENDERING
1. Create **JSON** objects for any information needed to be stored `(like events.json)` and store them in the **"public"** folder.
2. **FETCH** these objects using **"getInitialProps"** `(like in index.js)`
3. **getInitialProps** can only be called from components in the **"PAGES"** folder
4. **DO NOT** use **"import React from 'react'"**. it is redundant in the `Nextjs framework.`
5. For the sake of `uniformity and standard`, all components will have the file extension **(*.js)**]
6. Each _NEW_ page (in the pages folder) will be in a folder. Each of these new folders will have an "index.js" page which marks the entry point for the particular route.

---

## Structure:

### Pages

Contains the pages that we wish to display. Creating subfolders in the 'pages' folder will change the url of the page being fetched.

### Public

Store all static assets (like text files, json files, images etc) here.

#### MAKE SURE THAT NONE OF THE STATIC ASSETS MATCH THE NAME OF ANY PAGE

### UI

The UI elements that we will put in our pages

### THEME.JS

contains the theme that we will use

### pages/\_app.js

Upper level application component that runs when NEXTJS is ran.


### UI Related Information
Follow the  color palette:
```
$primary-color: #eb2f64;
$primary-color-light: #FF3366;
$primary-color-dark: #BA265D;

$color-background-dark:#1b262c;

$color-grey-light-1: #faf9f9;
$color-grey-light-2: #f4f2f2;
$color-grey-light-3: #f0eeee;
$color-grey-light-4: #ccc;

$color-grey-dark-1: #333;
$color-grey-dark-2: #777;
$color-grey-dark-3: #999;

$text-color:#333;


$shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
$shadow-light: 0 2rem 5rem rgba(0,0,0,.06);
```
### UI Helper Classes 
`.u-margin-bottom-large`

`.u-margin-bottom-medium`

`.u-margin-bottom-small`

`.u-margin-top-large`

`.u-margin-top-medium`

`.u-margin-top-small`

`.container`

`.paragraph`

`.u-center-text`

