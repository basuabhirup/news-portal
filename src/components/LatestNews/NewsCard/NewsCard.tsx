import React from 'react'
import './NewsCard.css'
import { NewsArticleInterface } from '../../../utills/interface';
import displayTime from '../../../utills/displayTime'
import NoImg from '../../../assets/NewsCard/News_Portal.png'

interface PropsInterface {
  article: NewsArticleInterface
}

const NewsCard: React.FC<PropsInterface> = ({ article }) => {
  let timeToDisplay: string = displayTime(article)

  return (
    <a href={article.url} className="NewsCard" style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
      <div className='NewsCard_Image' style={{ backgroundImage: `url(${article.urlToImage ? article.urlToImage : NoImg})` }} />
      <p className='NewsCard_Text'>{article.title.length > 80 ? `${article.title.substring(0, 79)}...` : article.title}</p>
      <p className='NewsCard_Time'>{timeToDisplay}</p>
    </a>
  )
};

export default NewsCard;
