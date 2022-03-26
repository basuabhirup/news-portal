export interface NewsArticleInterface {
  source: {
    id: string
    name: string
  },
  author?: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

// export interface NewsDatasetInterface {
//   status: string;
//   totalResults: number;
//   articles: NewsArticleInterface[];
// }

export interface NewsContextInterface {
  newsArray?: NewsArticleInterface[]
  setNewsArray?: React.Dispatch<React.SetStateAction<NewsArticleInterface[]>>
  hotNews?: NewsArticleInterface
  loadMoreNews?: () => void
  hasNextPage?: boolean
}

export interface WeatherDataInterface {
  dt?: number,
  sunrise?: number,
  sunset?: number,
  moonrise?: number,
  moonset?: number,
  moon_phase?: number,
  temp?: {
    day?: number,
    min?: number,
    max?: number,
    night?: number,
    eve?: number,
    morn?: number
  },
  feels_like?: {
    day?: number,
    night?: number,
    eve?: number,
    morn?: number
  },
  pressure?: number,
  humidity?: number,
  dew_point?: number,
  wind_speed?: number,
  wind_deg?: number,
  weather?: [
    {
      id?: number,
      main?: string,
      description?: string,
      icon?: string
    }
  ],
  clouds?: number,
  pop?: number,
  rain?: number,
  uvi?: number
}

export interface WeatherContextInterface {
  weatherData?: WeatherDataInterface[]
}