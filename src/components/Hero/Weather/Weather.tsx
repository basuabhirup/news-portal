import React, { useContext } from 'react'
import './Weather.css'
import WeatherContext from '../../../context/WeatherContext'

const Weather: React.FC = () => {
	const { weatherData } = useContext(WeatherContext)

	return (
		<div className='Weather_Root'>
			Weather
			<div className='Weather_Cards'>
				{weatherData?.map((weather) => (
					<div key={new Date().getTime()} className='Weather_Card'>
						<span>{weather.temp?.max} &emsp;</span> 
						<span>{weather.temp?.min}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Weather
