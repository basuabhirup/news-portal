import React from 'react'
import './HotNewsCard.css'
import { NewsArticleInterface } from '../../../../utills/interface'
import displayTime from '../../../../utills/displayTime'
import NoImg from '../../../../assets/NewsCard/News_Portal.png'

interface PropsInterface {
  hotNews: NewsArticleInterface;
}

const HotNewsCard: React.FC<PropsInterface> = ({ hotNews }) => {
  let timeToDisplay = displayTime(hotNews)
  
  return (
    <a href={hotNews.url} className="HotNewsCard_Root" target='_blank' rel="noopener noreferrer">
      <div className="HotNewsCard_Container" style={{
        backgroundImage: `url(${hotNews.urlToImage ? hotNews.urlToImage : NoImg})`
      }}>
        <p className='HotNewsCard_Text'>{hotNews.title.length > 100 ? `${hotNews.title.substring(0, 99)}...` : hotNews.title}</p>
        <p className='HotNewsCard_Time'>{timeToDisplay}</p>
      </div>
    </a>
  )
}

export default HotNewsCard
