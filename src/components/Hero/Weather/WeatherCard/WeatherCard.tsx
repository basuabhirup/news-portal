import React from 'react'
import { WeatherDataInterface } from '../../../../utills/interface'
import './WeatherCard.css'
import SunIcon from '../../../../assets/WeatherCard/Sun.svg'

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
		<div className={`Weather_Card ${index === 0 && 'today'}`}>
			<p className='Day MobileOnly'>
				{daysOfWeekShort[new Date(1000 * weather.dt!).getDay()]}
			</p>
			<p className='Day DesktopOnly'>
				{daysOfWeek[new Date(1000 * weather.dt!).getDay()]}
			</p>
			<img className='SunIcon' src={SunIcon} alt='sun' />
			<p className='Temp_Max'>{`${Math.floor(weather.temp?.max!)}°C`}</p>
			<p className='Temp_Min DesktopOnly'>{`${Math.floor(
				weather.temp?.min!
			)}°C`}</p>
		</div>
	)
}

export default WeatherCard
