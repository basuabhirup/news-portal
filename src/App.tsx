import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LatestNews from './components/LatestNews/LatestNews'
import Footer from './components/Footer/Footer'
import { NewsProvider } from './context/NewsContext'

const App: React.FC = () => {
	return (
		<NewsProvider>
			<div className="App">
				<Navbar />
				<Hero />
				<LatestNews />
				<Footer />
			</div>
		</NewsProvider>
	)
}

export default App
