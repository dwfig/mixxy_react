# MIXLR

Developed by [Gabbie Piraino](https://github.com/pirainogi) and [Daniel Fries](https://github.com/dwfig)

Mixlr allows users to remix up to four audio samples to dynamically create and save multi-layered tracks within the web application.

### Mixlr has been deployed on Heroku and Netlify. You can see the demo version of this application at [https://mixlr.netlify.com/](https://mixlr.netlify.com/). The backend can be accessed on [Heroku](https://mixlr.herokuapp.com), though please be aware that you need to navigate to a specific route in order to review the JSON data ([example available here](https://mixlr.herokuapp.com/api/v1/songs)).

# Features

* Users can select up to four musical samples from the Library to remix and send them to a Track Player slot in the Player Form
* Users can adjust playrate, pitch, volume, and the point in which a single  sample starts and stops (in/out) in the Track Player
* Users can remove individual samples from the Track Player and reselect samples from the Library (replaced in the first empty slot)
* Users can clear the entire Player Form
* Users can name and save a remix to the Saved Songs
* Users can send a saved remix back to the Player Form
* Users can delete a saved song from the Saved Songs

## Built With

* React.js
* Tone.js
* Javascript
* Ruby on Rails
* PostgreSQL Database
* HTML5 and CSS3 (semi-responsive web app)

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

## Select Samples to Remix, Review Saved Songs, Save Songs from Player Form
![Mixlr](https://raw.githubusercontent.com/dwfig/mixxy_react/master/public/mixlr-unselected.png)

## Remix Selected Samples
![Mixlr Remix](https://raw.githubusercontent.com/dwfig/mixxy_react/master/public/mixlr-selected.png)
