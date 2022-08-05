import React from 'react'
import { Link } from "react-router-dom";
import logo from '../logo.png'
function Navbar () {
	const Logostyle = {
		alignItems:'center'
	}
	return (
		<React.Fragment>
			<nav class="navbar" role="navigation" aria-label="main navigation" style={{
					position:'sticky',
					top:'0',
				}}>
				<div class="navbar-brand">
					<Link to="/"><span class="navbar-item">
          <img src={logo} style={Logostyle}/>
					</span></Link>
					<Link to="/Pokemon"><span class="navbar-item" href="https://bulma.io">
          Pokemon
					</span></Link>
					<Link to="/About"><span class="navbar-item">
          Our Team
					</span></Link>

				</div>
			</nav>
		</React.Fragment>
	)
}

export default Navbar
