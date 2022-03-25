import React, { useContext } from 'react'
import './LatestNews.css'
import NewsContext from '../../context/NewsContext'
import NewsCard from './NewsCard/NewsCard'

const LatestNews: React.FC = () => {
	const { newsArray } = useContext(NewsContext)
	// console.log(newsArray, setNewsArray)

	return (
		<div className='News'>
			<h2>Latest News</h2>
			<div className="News_Cards">
				{newsArray?.map((article) => (
					<NewsCard article={article} key={new Date(article.publishedAt).getTime()} />
				))}
			</div>
		</div>
	)
}

export default LatestNews
