import React, { useContext } from 'react'
import './Weather.css'
import WeatherContext from '../../../context/WeatherContext'
import WeatherCard from './WeatherCard/WeatherCard'
import SnowSunIcon from '../../../assets/WeatherCard/SnowSun.svg'
import { WeatherDataInterface } from '../../../utills/interface'

const Weather: React.FC = () => {
	const { weatherData } = useContext(WeatherContext)
	// const todayWeather: WeatherDataInterface = weatherData![0]
	// const todayMaxTemp: number | undefined = todayWeather.temp?.max // 
	// !--> Facing issue in extracting temp data from the the Weather API

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
					<p className='Temp_Heading'>{`${Math.floor(
						 40
					)}°C`}</p>
					<p className='Location_Heading'>Noida, UP</p>
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
