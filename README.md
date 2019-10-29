## Preview

!<img src="https://res.cloudinary.com/exchange-app/image/upload/v1572347087/pqyisgs1u9hjg9phohwg.png" width="200">
!<img src="https://res.cloudinary.com/exchange-app/image/upload/v1572347244/pjo7dtdz37oktfq5mh7o.png" width="200">
!<img src="https://res.cloudinary.com/exchange-app/image/upload/v1572347296/qmdi59z7jycff3xqn2ja.png" width="200">

## Exchange App

I developed the exchange app as part of my final project in the web development course at neue Fische in October 2019. It's a digital journal which enables exchange students to capture their memories in text and photographs, helps organise pictures and lets users save places and notes on an interactive map. 

### Tech Stack 

The exchange app was built using the MERN Stack:

* MongoDB
* Express.js
* React
* Node.js


### Additional dependencies

* axios
* draft.js
* mongoose
* nodemon
* styled-components
* cloudinary
* react-router-dom
* Google Maps API

### Requirements

* Node.js
* MongoDB running on localhost:27017
* Cloudinary account

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Setup

```
git@github.com:josefineschaefer/exchange-app.git

cd exchange-app
npm install
``` 

### Cloudinary

* Create an account on https://cloudinary.com/.
* Go to https://cloudinary.com/console/settings/upload#upload_presets
* Click Enable unsigned uploading
* Copy the preset name (the 8 character hash below name)
* Create a .env.local file in the root directory of this project and add your cloudname and preset:

```
REACT_APP_CLOUDINARY_CLOUDNAME='your_cloudname'
REACT_APP_CLOUDINARY_PRESET='your_preset'
```

### Run the app in the development mode

You can run the app in development mode with

```npm start```

Open http://localhost:3000 to view it in the browser. Switch your browser to responsive mode as this app was designed for mobile devices in mind.
