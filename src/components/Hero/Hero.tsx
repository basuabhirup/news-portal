import React from 'react'
import './Hero.css'
import HotTopics from './HotTopics/HotTopics'

const Hero: React.FC = () => {
	return (
		<div className='Hero'>
			<div style={{ gridArea: '1 / 3 / 2 / 4' }}>Weather</div>			
			<HotTopics />
		</div>
	)
}

export default Hero
