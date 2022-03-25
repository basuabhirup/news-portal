import React, { createContext, useState } from 'react'
import { newsResponse } from '../data/newsResponse'
import { NewsContextInterface, NewsArticleInterface } from '../utills/interface'

const NewsContext = createContext<NewsContextInterface>({})

export const NewsProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [newsArray, setNewsArray] = useState<NewsArticleInterface[]>(newsResponse.articles)

  // Get News Array from API


  // Update News Array on Vertical Scrolling

  // const updateNews = (num: number) => {
  //   setNewsArray({...newsArray, additionalNews})
  // }

  const newsContextData: NewsContextInterface = {
    newsArray,
    setNewsArray
  }

  return (
    <NewsContext.Provider value={newsContextData}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext