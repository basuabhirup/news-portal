import React, { useContext, useEffect } from 'react'
import './HotTopics.css'
import NewsContext from '../../../context/NewsContext'
import HotNewsCard from './HotTopicCard/HotNewsCard'

const HotTopics: React.FC = () => {
	const { hotNews, changeHotNews } = useContext(NewsContext)

	useEffect(() => {
		let randomNum = Math.floor(Math.random() * 10)
		setTimeout(() => {
			changeHotNews!(randomNum)
		}, 5000)
	}, [])

	return (
		<div className='HotTopics'>
			<h1>Hot Topics</h1>
			<HotNewsCard hotNews={hotNews!} />
		</div>
	)
}

export default HotTopics
