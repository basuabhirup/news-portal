import React, { createContext, useState } from 'react'
import { newsResponse } from '../data/newsResponse'
import { NewsContextInterface, NewsArticleInterface } from '../utills/interface'

const NewsContext = createContext<NewsContextInterface>({})

export const NewsProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [newsArray, setNewsArray] = useState<NewsArticleInterface[]>(newsResponse.articles)
  const [hotNews, setHotNews] = useState<NewsArticleInterface>(newsResponse.articles[0])

  const changeHotNews = (num: number): void => {
    setHotNews(newsResponse.articles[num])
  }
  // Get News Array from API


  // Update News Array on Vertical Scrolling

  // const updateNews = (num: number) => {
  //   setNewsArray({...newsArray, additionalNews})
  // }

  // setTimeout(() => {
  //   let randomNum = Math.floor(Math.random() * 10)
  //   setHotNews(newsResponse.articles[randomNum])
  // }, 5000)

  const newsContextData: NewsContextInterface = {
    newsArray,
    setNewsArray,
    hotNews,
    changeHotNews
  }

  return (
    <NewsContext.Provider value={newsContextData}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext