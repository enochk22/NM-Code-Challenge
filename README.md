# Daily Dose of Doge, Northwestern Mutual code challenge

Create a responsive (phone, tablet, desktop) web application that allows the user to quick filter a list of things. The top of the page will have a search input field and then below that a list of things in response to the filter. The things should be sorted alphabetically. The things could be anything, but should be AJAX pulled from a backend service that you write and should ultimately be pulled from an open public API.

We all love dogs. In fact, who doesn't? Daily Dose of Doges (DDD) is a web app that contains hundreds of thousands of dog pics.

Technologies used include ExpressJS, NodeJS (backend) and ReactJS (frontend). AJAX calls are made using axios and images are retrieved from [Dog API](https://dog.ceo/dog-api/). Please refer to below for a quick guide to run the web app on localhost.  

Here is a screenshot of the web app:

<img width="1203" alt="screen shot 2018-02-08 at 9 50 26 pm" src="https://user-images.githubusercontent.com/21212915/36011013-215f0212-0d1a-11e8-8c5c-845336edcc67.png">

## Running the app

First create a local copy of the application on your machine

```
git clone https://github.com/enochk22/daily-dose-of-doge.git
```

Once installed, open a new terminal window and ```cd``` into the installed directory, and run:

```
cd nm-api && yarn install && yarn start
```

to fire up the web app, go to the root directory and run:

```
cd nm-react && yarn install && yarn start
```

```yarn install``` will make sure you have all the necessary node dependencies installed. Go to ```localhost:3000``` to use the web app.


