export interface NewsArticleInterface {
  source: {
    id: string;
    name: string;
  },
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

// export interface NewsDatasetInterface {
//   status: string;
//   totalResults: number;
//   articles: NewsArticleInterface[];
// }

export interface NewsContextInterface {
  newsArray?: NewsArticleInterface[];
  setNewsArray?: React.Dispatch<React.SetStateAction<NewsArticleInterface[]>>;
  hotNews?: NewsArticleInterface;
  changeHotNews?: (num: number) => void;
}