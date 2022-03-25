import React from 'react'
import './NewsCard.css'
import { NewsArticleInterface } from '../../../utills/interface';
import displayTime from '../../../utills/displayTime'

interface PropsInterface {
  article: NewsArticleInterface
}

const NewsCard: React.FC<PropsInterface> = ({ article }) => {
  let timeToDisplay: string = displayTime(article)

  return (
    <a href={article.url} className="NewsCard" style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
      <div className='NewsCard_Image' style={{ backgroundImage: `url(${article.urlToImage})` }} />
      <p className='NewsCard_Text'>{article.title.length > 100 ? `${article.title.substring(0, 99)}...` : article.title}</p>
      <p className='NewsCard_Time'>{timeToDisplay}</p>
    </a>
  )
};

export default NewsCard;
