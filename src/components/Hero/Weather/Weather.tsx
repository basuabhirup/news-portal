import React, {useContext} from 'react'
import './Weather.css'
import WeatherContext from '../../../context/WeatherContext'
import WeatherCard from './WeatherCard/WeatherCard'

const Weather: React.FC = () => {
	const {weatherData} = useContext(WeatherContext)


	return (
		<div className='Weather_Root'>
			<div className='Weather_Cards'>
				{weatherData?.map((weather, index) => (
					<WeatherCard weather={weather} index={index}  />
				))}
			</div>
		</div>
	)
}

export default Weather
