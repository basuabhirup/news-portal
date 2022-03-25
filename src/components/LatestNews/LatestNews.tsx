import React, { useContext } from 'react'
import './LatestNews.css'
import NewsContext from '../../context/NewsContext'
import NewsCard from './NewsCard/NewsCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const LatestNews: React.FC = () => {
	const { newsArray, loadMoreNews, hasNextPage } = useContext(NewsContext)
	// console.log(newsArray, setNewsArray)

	return (
		<div className='News'>
			<h2>Latest News</h2>
			<InfiniteScroll
				dataLength={newsArray!.length}
				next={loadMoreNews!}
				hasMore={hasNextPage!}
				loader={<h4>Loading...</h4>}
				className='News_Cards'
			>
				{newsArray?.map((article) => (
					<NewsCard
						article={article}
						key={new Date(article.publishedAt).getTime()}
					/>
				))}
			</InfiniteScroll>
		</div>
	)
}

export default LatestNews
