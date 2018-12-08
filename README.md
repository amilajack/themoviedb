themoviedb
==========

[![Build Status](https://travis-ci.org/amilajack/themoviedb.svg?branch=master)](https://travis-ci.org/amilajack/themoviedb)

⚠️ Work in Progress. Do Not Use ⚠️

A Node API to [themovedb](https://www.themoviedb.org/?language=en-US)

## Usage

```js
import TheMovieDb from 'themoviedb';

const db = new TheMovieDb({
  apiKey: 'your-api-key-here'
});

const result = await db.miscPopularMovies();
console.log(result);
```

## Local Setup

```bash
git clone https://github.com/amilajack/themoviedb
cd themoviedb
yarn
cp .env.example .env
# Add your API key to `.env`
yarn test
```
