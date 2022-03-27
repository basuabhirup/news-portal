import React from 'react'
import { WeatherDataInterface } from '../../../../utills/interface'
import './WeatherCard.css'
import SunIcon from '../../../../assets/WeatherCard/Sun.svg'
import SnowSunIcon from '../../../../assets/WeatherCard/SnowSun.svg'

interface PropsInterface {
	weather: WeatherDataInterface
	index: number
}

const WeatherCard: React.FC<PropsInterface> = ({ weather, index }) => {
	const daysOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednessday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const daysOfWeekShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']

	return (
		<div key={weather.dt} className={`Weather_Card ${index === 0 && 'today'}`}>
			<p className='MobileOnly'>
				{daysOfWeekShort[new Date(1000 * weather.dt!).getDay()]}
			</p>
			<span className='DesktopOnly'>
				{daysOfWeek[new Date(1000 * weather.dt!).getDay()]}
			</span>
			<img src={SunIcon} alt='sun' />
			<p>{`${Math.floor(weather.temp?.max!)}°C`}</p>
			<p className='DesktopOnly'>{`${Math.floor(weather.temp?.min!)}°C`}</p>
		</div>
	)
}

export default WeatherCard
