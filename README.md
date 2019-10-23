# MIXLR

Developed by [Gabbie Piraino](https://github.com/pirainogi) and [Daniel Fries](https://github.com/dwfig)

Mixlr allows users to remix up to four audio samples to dynamically create and save multi-layered tracks within the web application.

### Mixlr has been deployed on Heroku and Netlify. You can see the demo version of this application at [https://mixlr.netlify.com/](https://mixlr.netlify.com/). The backend can be accessed on [Heroku](https://mixlr.herokuapp.com), though please be aware that you need to navigate to a specific route in order to review the JSON data ([example available here](https://mixlr.herokuapp.com/api/v1/songs)).

# Features

* Users can select up to four musical samples to remix
* Users can adjust playrate, pitch, volume, and the point in which a sample starts and stops (in/out)
* Users can remove samples from the track player and reselect samples from the available samples
* Users can name and save a remix to the library
* Users can delete a saved song from the library

## Built With

* Ruby on Rails
* React.js
* Tone.js
* Javascript
* HTML5 and CSS3 (semi-responsive)
* PostgreSQL Database

### Please find the Ruby on Rails backend repo at [Mixxy-Rails](https://github.com/pirainogi/mixxy_rails).

## Prerequisites

You will need `node` or `yarn` installed on your computer in order to run this app.

In order to run this app, first clone the server repo down onto your local machine and follow the instructions in the readme to spin up the server. Then clone this repo down onto your local machine and navigate to that directory. Then install the necessary dependencies with either:
* `npm install`
* `yarn install`

Then you can start running the program with `npm start`.

## NPM Packages
* Tone.js
* React-Dom.js

## Select Samples to Remix
![Mixlr](https://raw.githubusercontent.com/dwfig/mixxy_react/master/public/mixlr-selected.png)

## Remix Selected Samples and Save to Library
![Mixlr Remix](https://raw.githubusercontent.com/dwfig/mixxy_react/master/public/mixlr-unselected.png)
