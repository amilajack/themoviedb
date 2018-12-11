export default {
  base_url: 'https://api.themoviedb.org/3/',
  authentication: {
    requestToken: 'authentication/token/new',
    sessionId: 'authentication/session/new'
  },
  methods: {
    configuration: {
      '': { resource: 'configuration', method: 'get' }
    },
    find: {
      '': { resource: 'find/:id', method: 'get' }
    },
    search: {
      Movie: { resource: 'search/movie', method: 'get' },
      Tv: { resource: 'search/tv', method: 'get' },
      Multi: { resource: 'search/multi', method: 'get' },
      Collection: { resource: 'search/collection', method: 'get' },
      Person: { resource: 'search/person', method: 'get' },
      List: { resource: 'search/list', method: 'get' },
      Company: { resource: 'search/company', method: 'get' },
      Keyword: { resource: 'search/keyword', method: 'get' }
    },
    collection: {
      Info: { resource: 'collection/:id', method: 'get' },
      Images: { resource: 'collection/:id/images', method: 'get' }
    },
    discover: {
      Movie: { resource: 'discover/movie', method: 'get' },
      Tv: { resource: 'discover/tv', method: 'get' }
    },
    movie: {
      Info: { resource: 'movie/:id', method: 'get' },
      AlternativeTitles: {
        resource: 'movie/:id/alternative_titles',
        method: 'get'
      },
      Latest: { resource: 'movie/latest', method: 'get' },
      Upcoming: { resource: 'movie/upcoming', method: 'get' },
      NowPlaying: { resource: 'movie/now_playing', method: 'get' },
      Popular: { resource: 'movie/popular', method: 'get' },
      TopRated: { resource: 'movie/top_rated', method: 'get' },
      Changed: { resource: 'movie/changes', method: 'get' },
      Credits: { resource: 'movie/:id/credits', method: 'get' },
      Images: { resource: 'movie/:id/images', method: 'get' },
      Videos: { resource: 'movie/:id/videos', method: 'get' },
      Keywords: { resource: 'movie/:id/keywords', method: 'get' },
      Releases: { resource: 'movie/:id/releases', method: 'get' },
      ReleaseDates: { resource: 'movie/:id/release_dates', method: 'get' },
      Trailers: { resource: 'movie/:id/trailers', method: 'get' },
      Translations: { resource: 'movie/:id/translations', method: 'get' },
      Similar: { resource: 'movie/:id/similar_movies', method: 'get' },
      Reviews: { resource: 'movie/:id/reviews', method: 'get' },
      Lists: { resource: 'movie/:id/lists', method: 'get' },
      Changes: { resource: 'movie/:id/changes', method: 'get' },
      RatingUpdate: { resource: 'movie/:id/rating', method: 'post' }
    },
    tv: {
      Info: { resource: 'tv/:id', method: 'get' },
      Credits: { resource: 'tv/:id/credits', method: 'get' },
      ExternalIds: { resource: 'tv/:id/external_ids', method: 'get' },
      Images: { resource: 'tv/:id/images', method: 'get' },
      Videos: { resource: 'tv/:id/videos', method: 'get' },
      Similar: { resource: 'tv/:id/similar', method: 'get' },
      Translations: { resource: 'tv/:id/translations', method: 'get' },
      SeasonInfo: { resource: 'tv/:id/season/:seasonNumber', method: 'get' },
      SeasonCredits: {
        resource: 'tv/:id/season/:seasonNumber/credits',
        method: 'get'
      },
      SeasonVideos: {
        resource: 'tv/:id/season/:seasonNumber/videos',
        method: 'get'
      },
      SeasonExternalIds: {
        resource: 'tv/:id/season/:seasonNumber/external_ids',
        method: 'get'
      },
      SeasonImages: {
        resource: 'tv/:id/season/:seasonNumber/images',
        method: 'get'
      },
      EpisodeInfo: {
        resource: 'tv/:id/season/:seasonNumber/episode/:episodeNumber',
        method: 'get'
      },
      EpisodeCredits: {
        resource: 'tv/:id/season/:seasonNumber/episode/:episodeNumber/credits',
        method: 'get'
      },
      EpisodeExternalIds: {
        resource:
          'tv/:id/season/:seasonNumber/episode/:episodeNumber/external_ids',
        method: 'get'
      },
      EpisodeImages: {
        resource: 'tv/:id/season/:seasonNumber/episode/:episodeNumber/images',
        method: 'get'
      },
      OnTheAir: { resource: 'tv/on_the_air', method: 'get' },
      AiringToday: { resource: 'tv/airing_today', method: 'get' }
    },
    person: {
      Info: { resource: 'person/:personId', method: 'get' },
      MovieCredits: {
        resource: 'person/:personId/movie_credits',
        method: 'get'
      },
      TvCredits: { resource: 'person/:personId/tv_credits', method: 'get' },
      CombinedCredits: {
        resource: 'person/:personId/combined_credits',
        method: 'get'
      },
      Images: { resource: 'person/:personId/images', method: 'get' },
      TaggedImages: {
        resource: 'person/:personId/tagged_images',
        method: 'get'
      },
      Changes: { resource: 'person/:personId/changes', method: 'get' },
      Latest: { resource: 'person/latest', method: 'get' },
      Popular: { resource: 'person/popular', method: 'get' }
    },
    list: {
      Info: { resource: 'list/:id', method: 'get' }
    },
    genre: {
      MovieList: { resource: 'genre/movie/list', method: 'get' },
      TvList: { resource: 'genre/tv/list', method: 'get' },
      Movies: { resource: 'genre/:id/movies', method: 'get' }
    },
    keyword: {
      Info: { resource: 'keyword/:id', method: 'get' },
      Movies: { resource: 'keyword/:id/movies', method: 'get' }
    },
    company: {
      Info: { resource: 'company/:id', method: 'get' },
      Movies: { resource: 'company/:id/movies', method: 'get' }
    },
    account: {
      Info: { resource: 'account', method: 'get' },
      Lists: { resource: 'account/:id/lists', method: 'get' },
      FavoriteMovies: {
        resource: 'account/:id/favorite_movies',
        method: 'get'
      },
      FavoriteUpdate: { resource: 'account/:id/favorite', method: 'post' },
      RatedMovies: { resource: 'account/:id/rated_movies', method: 'get' },
      MovieWatchlist: {
        resource: 'account/:id/watchlist/movies',
        method: 'get'
      },
      TvWatchlist: { resource: 'account/:id/watchlist/tv', method: 'get' },
      WatchlistUpdate: { resource: 'account/:id/watchlist', method: 'post' }
    },
    misc: {
      ChangedPeople: { resource: 'person/changes', method: 'get' }
    }
  }
};
