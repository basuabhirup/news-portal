import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LatestNews from './components/LatestNews/LatestNews'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
	return (
		<div className="App">
			<Navbar />
      <Hero />
      <LatestNews />
      <Footer />
		</div>
	)
}

export default App
