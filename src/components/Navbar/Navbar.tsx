import React from 'react'
import './Navbar.css'
import SearchIcon from '../../assets/Navbar/Search.svg'
import LogoutIcon from '../../assets/Navbar/Logout.svg'

const Header: React.FC = () => {
	return (
		<div className='Navbar'>
			<a href='/' className='Navbar_Logo'>
				<span className='left'>News </span>
				<span className='right'>Portal</span>
			</a>
			<div></div>
			<div>
				<img src={SearchIcon} alt='Search' />
			</div>
			<div>
				<img src={LogoutIcon} alt='Logout' />
			</div>
		</div>
	)
}

export default Header
