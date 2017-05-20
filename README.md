# Short.ly
A web app that shortens long urls

## Implementation
The app consists of a very simple express app, that has one `post` endpoint to shorten a given url. And a dynamic `get` url to redirect user to the original URL.

Original URLS and shortened urls are stored in a MongoDB so that when a user enters an existing url, it will be fetched from the DB instead of replicating it.

### Shortening Algoritm
I used simple encoding and decoding technique to shorten a URL. A new base system is made using some specific characters.

`123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ`

These characters include `1-9` , `a-z` and `A-Z ` excluding 0, I, O (capital oh) for clarity in shortened URL.

These characters are `58` in number hence we named the base system `base-58`. 

These are the steps `3` followed to shorten a url:

- Assign each new URL a unique (sequencial) integer id
- Encode that `base-10` integer id into `base-58`
- This encoded string is our shortened URL. We save this URL alongwith the original URL.

*Note: I inspired myself from [this](https://coligo.io/create-url-shortener-with-node-express-mongo/) tutorial to build the algorithm.*


## How to run the app
Two ways to run the app

## 1. Local Setup

### Required Services:
You need to have these services running on your machine 

- Node.js
- MongoDB
- NPM

### Steps to run the app

- `clone ` git app
- cd into the directory
- run `npm install`
- make sure your mongoDB server is running on `localhost:27017` otherwise change the url from `./app.js`
- run `npm start` to run the app on port `3000`


## 2. Docker Container
To run the app on Docker container you need to have `docker` and `docker-compose` installed in your system.

- Run the app with `npm run docker` command.





 
