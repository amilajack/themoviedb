themoviedb
==========

[![Build Status](https://travis-ci.org/amilajack/themoviedb.svg?branch=master)](https://travis-ci.org/amilajack/themoviedb)

A Node API to [themovedb](https://www.themoviedb.org/?language=en-US)

## Usage

```js
import TheMovieDb from 'themoviedb';

const db = new TheMovieDb({
  apiKey: 'your-api-key-here'
});

// Popular movies
const result = await db.moviePopular();
console.log(result);

// Movie info
await db.movieInfo({ id: 550 });
await db.Info({ id: 550 });
```

## API
### Collection
* `db.collectionInfo({ id: Number })`
* `db.collectionImages({ id: Number })`

### Discover
* `db.discoverMovie()`
* `db.discoverTv()`

### Movie
* `db.moviePopular()`
* `db.movieLatest()`
* `db.movieUpcoming()`
* `db.movieNowPlaying()`
* `db.movieTopRated()`
* `db.movieChanged()`
* `db.movieInfo({ id: Number })`
* `db.movieAlternativeTitles({ id: Number })`
* `db.movieCredits({ id: Number })`
* `db.movieImages({ id: Number })`
* `db.movieVideos({ id: Number })`
* `db.movieKeywords({ id: Number })`
* `db.movieReleases({ id: Number })`
* `db.movieReleaseDates({ id: Number })`
* `db.movieTrailers({ id: Number })`
* `db.movieTranslations({ id: Number })`
* `db.movieSimilar({ id: Number })`
* `db.movieReviews({ id: Number })`
* `db.movieLists({ id: Number })`
* `db.movieChanges({ id: Number })`
* `db.movieRatingUpdate({ id: Number })`

### TV
* `db.tvInfo({ id: Number })`
* `db.tvCredits({ id: Number })`
* `db.tvExternalIds({ id: Number })`
* `db.tvImages({ id: Number })`
* `db.tvVideos({ id: Number })`
* `db.tvSimilar({ id: Number })`
* `db.tvTranslations({ id: Number })`
* `db.tvSeasonInfo({ id: Number, seasonNumber: Number })`
* `db.tvSeasonCredits({ id: Number, seasonNumber: Number })`
* `db.tvSeasonVideos({ id: Number, seasonNumber: Number })`
* `db.tvSeasonExternalIds({ id: Number, seasonNumber: Number })`
* `db.tvSeasonImages({ id: Number, seasonNumber: Number })`
* `db.tvEpisodeInfo({ id: Number, seasonNumber: Number, episodeNumber: Number })`
* `db.tvEpisodeCredits({ id: Number, seasonNumber: Number, episodeNumber: Number })`
* `db.tvEpisodeExternalIds({ id: Number, seasonNumber: Number, episodeNumber: Number })`
* `db.tvEpisodeImages({ id: Number, seasonNumber: Number, episodeNumber: Number })`
* `db.tvOnTheAir({ id: Number })`
* `db.tvAiringToday({ id: Number })`

### Person
* `db.personInfo({ personId: Number })`
* `db.personMovieCredits({ personId: Number })`
* `db.personTvCredits({ personId: Number })`
* `db.personCombinedCredits({ personId: Number })`
* `db.personImages({ personId: Number })`
* `db.personTaggedImages({ personId: Number })`
* `db.personChanges({ personId: Number })`
* `db.personLatest({ personId: Number })`
* `db.personPopular({ personId: Number })`

### List
* `db.listInfo({ id: Number })`

## Local Setup

```bash
git clone https://github.com/amilajack/themoviedb
cd themoviedb
yarn
cp .env.example .env
# Add your API key to `.env`
yarn test
```
