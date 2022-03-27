import React, { useContext } from 'react'
import './Weather.css'
import WeatherContext from '../../../context/WeatherContext'
import WeatherCard from './WeatherCard/WeatherCard'
import SnowSunIcon from '../../../assets/WeatherCard/SnowSun.svg'
import { WeatherDataInterface } from '../../../utills/interface'

const Weather: React.FC = () => {
	const { weatherData } = useContext(WeatherContext)


	return (
		<div className='Weather_Root'>
			<p className='Date_Heading DesktopOnly'>
				{new Date().toLocaleString(undefined, {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
			<div className='Weather_Heading DesktopOnly'>
				<div>
					<p>{`${Math.floor(54.84)}°C`}</p>
					<p>Noida, UP, India</p>
				</div>
				<img src={SnowSunIcon} alt='Snow-Sun' />
			</div>
			<div className='Weather_Cards'>
				{weatherData?.map((weather, index) => (
					<WeatherCard key={weather.dt} weather={weather} index={index} />
				))}
			</div>
		</div>
	)
}

export default Weather
