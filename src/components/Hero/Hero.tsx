import React from 'react'
import './Hero.css'
import HotTopics from './HotTopics/HotTopics'
import Weather from './Weather/Weather'
import { WeatherProvider } from '../../context/WeatherContext'

const Hero: React.FC = () => {
	return (
		<WeatherProvider>
			<div className='Hero'>
				<Weather />
				<HotTopics />
			</div>
		</WeatherProvider>
	)
}

export default Hero
