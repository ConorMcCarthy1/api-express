# Assignment 2 - Web API.

Name: Conor McCarthy - 20094107

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 +  Pages Content are hidden behind login/signup page, in which users are stored on a mongodb server
 + Recommendations on the Profile Page
 + Celebrity page, TV Series Pages
 + etc

## Setup requirements.

Setup as normal, the React App is found in api-labs/reactApp, ran using localhost:3000. 
The Mongo-Express app is found in api-labs/movies-api/movies-api, ran on localhost:8080

## API Configuration

This would often create trouble, some days, the database would connect using the 127.0.0.1 method, off the machine, other times I would have use localhost and an online mongo string: 

NODEENV=development
PORT=8080
HOST=localhost/127.0.0.1
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/celebs | GET | Gets a list of celebrities that are big that day (time sensitive) 
- /api/toprated | GET | Gets a list of top rated movies, using this as the recommendation API
- /api/series | GET | Gets a list of TV series

## Security and Authentication

So most of the website is hidden behind the user login and sign up, the sign up requires an email, but we do not store this for GDPR reasons. After the user signs in, they are taken directly to the movie page.

This, along with the Celebrities, Series and profile routes, are protected routes. 

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   