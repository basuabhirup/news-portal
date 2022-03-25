import React, { useContext } from 'react'
import './HotTopics.css'
import NewsContext from '../../../context/NewsContext'
import HotNewsCard from './HotTopicCard/HotNewsCard'

const HotTopics: React.FC = () => {
	const { hotNews } = useContext(NewsContext)

	return (
		<div className='HotTopics'>
			<h1>Hot Topics</h1>
			<HotNewsCard hotNews={hotNews!} />
		</div>
	)
}

export default HotTopics
