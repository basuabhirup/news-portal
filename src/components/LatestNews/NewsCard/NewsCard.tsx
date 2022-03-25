import React from 'react'
import './NewsCard.css'
import { NewsArticleInterface } from '../../../utills/interface';

interface PropsInterface {
  article: NewsArticleInterface
}

const NewsCard: React.FC<PropsInterface> = ({ article }) => {
  const timeNow: number = Date.now()
  const timePublishedAt: number = new Date(article.publishedAt).getTime()
  const timeDifference: number = timeNow - timePublishedAt
  let timeToDisplay: string;

  if (timeDifference < 1000 * 3600) {
    const minuteDifference: number = Math.floor(timeDifference / (1000 * 60))
    timeToDisplay = `${minuteDifference} ${minuteDifference === 1 ? 'Minute' : 'Minutes'} Ago`
  } else if (timeDifference < 1000 * 3600 * 24) {
    const hourDifference: number = Math.floor(timeDifference / (1000 * 3600))
    timeToDisplay = `${hourDifference} ${hourDifference === 1 ? 'Hour' : 'Hours'} Ago`
  } else if (timeDifference < 1000 * 3600 * 24 * 30) {
    const dayDifference: number = Math.floor(timeDifference / (1000 * 3600 * 24))
    timeToDisplay = `${dayDifference} ${dayDifference === 1 ? 'Day' : 'Days'} Ago`
  } else if (timeDifference < 1000 * 3600 * 24 * 365) {
    const monthDifference: number = Math.floor(timeDifference / (1000 * 3600 * 24 * 30))
    timeToDisplay = `${monthDifference} ${monthDifference === 1 ? 'Month' : 'Months'} Ago`
  } else {
    const yearDifference: number = Math.floor(timeDifference / (1000 * 3600 * 24 * 365))
    timeToDisplay = `${yearDifference} ${yearDifference === 1 ? 'Year' : 'Years'} Ago`
  }

  return (
    <a href={article.url} className="NewsCard" style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
      <div className='NewsCard_Image' style={{ backgroundImage: `url(${article.urlToImage})` }} />
      <p className='NewsCard_Text'>{article.title.length > 100 ? `${article.title.substring(0, 99)}...` : article.title}</p>
      <p className='NewsCard_Time'>{timeToDisplay}</p>
    </a>
  )
};

export default NewsCard;
