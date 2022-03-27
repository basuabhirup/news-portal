import React, { useContext } from 'react'
import './LatestNews.css'
import NewsContext from '../../context/NewsContext'
import NewsCard from './NewsCard/NewsCard'
import InfiniteScroll from 'react-infinite-scroll-component'

const LatestNews: React.FC = () => {
	const { newsArray, loadMoreNews, hasNextPage } = useContext(NewsContext)
	const endMsgStyles = {
		textAlign: 'center',
		fontSize: '0.75rem',
		fontWeight: 400,
		width: '100%',
		marginTop: 0
	} as React.CSSProperties

	return (
		<div className='News'>
			<h2>Latest News</h2>
			<InfiniteScroll
				dataLength={ newsArray!.length }
				next={ loadMoreNews! }
				hasMore={ hasNextPage! }
				loader={ <h4 style={endMsgStyles}>Loading...</h4> }
				className='News_Cards'
				endMessage={
					<p style={endMsgStyles}>
						<i>Yay! You have seen it all </i> &nbsp; ✅
					</p>
				}
			>
				{ newsArray?.map((article) => (
					<NewsCard
						article={ article }
						key={ new Date(article.publishedAt).getTime() }
					/>
				)) }
			</InfiniteScroll>
		</div>
	)
}

export default LatestNews
