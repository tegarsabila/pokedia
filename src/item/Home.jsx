import React from "react";
import logo from '../logo.png'
import pokedia from '../assets/img/pokedia.gif'
import { Link } from 'react-router-dom'
import kawahEdukasi from '../assets/img/kawah-edukasi.png' 
function Home () {
    return (
        <React.Fragment>
					<section class="hero is-medium is-link">
						<div class="hero-body">
							<div class="container">
								<div class="columns" style={{
										alignItems:'center'
									}}>
									<div class="column is-6-mobile is-offset-3-mobile is-4-desktop is-offset-1-desktop">
										<img style={{
											width:'100%',
											maxWidth:'250px'
										}} src={logo} />
									</div>
									<div class="column has-text-centered is-10-mobile is-offset-1-mobile is-5-desktop is-offset-1-desktop">
										<h1 class="title is-3">Pokedia</h1>
										<p>Pokedia is a mini encyclopedia of all types, abilities, and stats on Pokemon</p>
										<Link to="/Pokemon"><button class="button is-link is-light">Get Started</button></Link>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="hero is-medium is-primary">
						<div class="hero-body">
							<div class="container">
								<div class="columns" style={{
										alignItems:'center'
									}}>
									<div class="column is-6-mobile is-offset-3-mobile is-4-desktop is-offset-1-desktop">
										<img style={{
											width:'100%',
											maxWidth:'250px'
										}} src={pokedia} />
									</div>
									<div class="column has-text-centered is-10-mobile is-offset-1-mobile is-5-desktop is-offset-1-desktop">
										<h1 class="title is-3">What is Pokedia</h1>
										<p>pokedia is the place to find info about your pokemon</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section class="hero is-medium">
						<div class="hero-body has-text-centered">
							<h1 class="title is-3">Sponsor</h1>
							<div class="columns" style={{alignItems:'center'}}>
								<div class="column is-12-mobile is-8-desktop is-offset-2-desktop">
									<img src={kawahEdukasi} alt="" />
								</div>
							</div>
							<h1 class="title is-3">Build with</h1>
							<div class="columns" style={{alignItems:'center'}}>
								<div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
									<img style={{width: '70%', maxWidth:'100px'}} src="https://bulma.io/images/bulma-logo.png" alt="" />
								</div>
								<div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
									<img style={{width: '70%', maxWidth:'100px'}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
								</div>
								<div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
									<img style={{width: '70%', maxWidth:'100px'}} src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" alt="" />
								</div>
								<div class="column is-10-mobile is-offset-1-mobile is-2-desktop is-offset-4-desktop">
									<img style={{width: '70%', maxWidth:'100px'}} src="https://about.gitlab.com/images/press/logo/png/gitlab-logo-500.png" alt="" />
								</div>

							</div>
						</div>
					</section>
        </React.Fragment>
    )
}

export default Home;
