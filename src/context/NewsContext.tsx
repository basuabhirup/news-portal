import React, { createContext, useEffect, useState } from 'react'
import { newsResponse } from '../data/newsResponse'
import { NewsContextInterface, NewsArticleInterface } from '../utills/interface'
import axios from 'axios'

const NewsContext = createContext<NewsContextInterface>({})

export const NewsProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [newsArray, setNewsArray] = useState<NewsArticleInterface[]>(
    newsResponse.articles
  )
  const [hotNews, setHotNews] = useState<NewsArticleInterface>(newsArray[2])
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [totalResults, setTotalResults] = useState<number>(0)
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)

  const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=${pageSize}&page=${page}`

  // Get News Array from API
  const getNews = (): void => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setLoading(false)
        if (res.data.status === 'ok') {
          setNewsArray(res.data.articles)
          setTotalResults(res.data.totalResults)
          let randomNum = Math.floor(Math.random() * 10)
          setHotNews(res.data.articles[randomNum])
          if (res.data.totalResults > res.data.articles.length) {
            setPage(page + 1)
          }
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  useEffect(() => {
    getNews()
  }, [])

  // Checks whether there is a next page everytime the newsArray is updated
  useEffect(() => {
    setHasNextPage(totalResults > newsArray.length)
  }, [newsArray, totalResults, hasNextPage])


  // Change Page value on Vertical Scrolling
  const loadMoreNews = (): void => {
    updateNews()
    if (hasNextPage) {
      setPage(page + 1)
    }
  }

  // Define function to update news Array on vertical scrolling
  const updateNews = (): void => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.status === 'ok') {
          setNewsArray(newsArray.concat(Array.from(res.data.articles)))
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // Call updateNews on page change while scrolling down vertically
  // useEffect(() => {
  //   updateNews()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page]);


  const newsContextData: NewsContextInterface = {
    newsArray,
    setNewsArray,
    hotNews,
    loadMoreNews,
    hasNextPage,
  }

  return (
    <NewsContext.Provider value={newsContextData}>
      {children}
    </NewsContext.Provider>
  )
}

export default NewsContext
