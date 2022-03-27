import React, { createContext, useState, useEffect } from 'react'
import {
	WeatherDataInterface,
	WeatherContextInterface,
} from '../utills/interface'
import axios from 'axios'

const WeatherContext = createContext<WeatherContextInterface>({})

export const WeatherProvider: React.FC = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [weatherData, setWeatherData] = useState<WeatherDataInterface[]>([])

	const weatherContextData: WeatherContextInterface = {
		weatherData,
	}

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${'28.6076'}&lon=${'77.3793'}&units=${'metric'}&&exclude=${'current,minutely,hourly'}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
			.then((res) => {
				if (res.status === 200) {
					setWeatherData(res.data.daily) 
				}
			})
      .catch((err) => {
        console.error(err)
      })
	}, [])

	return (
		<WeatherContext.Provider value={weatherContextData}>
			{children}
		</WeatherContext.Provider>
	)
}

export default WeatherContext
