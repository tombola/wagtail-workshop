<h2 style="font-size:30px" align="center">
    Coders Of Colour Introduction to Wagtail
</h2>
<p align="center"><i>
This repository contains the documentaion for a wagtail workshop using <a href="https://www.gatsbyjs.org/starters/Rocketseat/gatsby-starter-rocket-docs/"> Gatsby Starter: Rocket Docs</a></i></p>

<p align="center"><i>See the live documentation at <a href="https://intro-wagtail.netlify.app/">https://intro-wagtail.netlify.app/</a></i></p>

<p align="center">
    <img src="src/images/wc.png">
</p>



## Adding to the documentation

### Dependancies

- [NPM](https://www.npmjs.com/get-npm)
- [gatsby-cli](https://www.gatsbyjs.org/docs/quick-start/#install-the-gatsby-cli)

After cloning the repo. Install the node_modules:

```
npm install
```

Package.json contains the following npm script commands:

```
"build": "gatsby build",
"start": "gatsby develop",
"serve": "gatsby serve",
"clean": "gatsby clean"
```

To run the documentation locally, first build the documentation then run npm serve:
```
npm run build
npm run start
```

Documentation will be available on http://localhost:8000/. Changes to the documentation will be automatically reloaded.

Ensure changes made to the documenation are made in the ./src directory.

## Deploying changes

```
npm run deploy
```