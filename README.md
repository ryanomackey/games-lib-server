# Intro

This is the server-side code for my capstone project while at [Galvanize](http://www.galvanize.com). Client-side code can be found [here](https://github.com/ryanomackey/games-lib-client).

![screenshot](http://res.cloudinary.com/dh55hnjfm/image/upload/v1475163258/Screen_Shot_2016-09-29_at_9.12.39_AM_btvc8q.png)

# API

### Protected Routes (requries JWT)

#### /api

Search Giant Bomb for games:

> GET /api/search?query=Grand%20Theft%20%Auto

Search Twitch for streams:

> GET /api/twitch?q=Grand%20Theft%20%Auto

#### /games

Retrieve all titles for a given user:

> GET /games

Add a new title to a user's library:

> POST /games

Update ownership/completion for a title in a user's library:

> PUT /games

Delete a title from a user's library:

> DELETE /games

#### /steamImport

Import a single steam game into a user's library:

> GET /steamImport/single

Retrieve a list of owned games for a given Steam ID:

> GET /steamImport/:id

#### /wishlist

Retrieve a list of games and their Amazon prices/users for a given user's unowned games:

> GET /wishlist/amazon

### Unprotected Routes

#### /authenticate

Signup for an account:

> POST /authenticate/signup

Login to an account (returns a JWT):

> POST /authenticate/login

#### /steam

Send client to Steam to authenticate:

> GET /steam

Return address for Steam Passport Strategy:

> GET /steam/return
