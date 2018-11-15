import React, { Component } from 'react'
import './style.scss'
import Button from 'components/Button'

export default class HomeReveal extends Component {
	render(){
		console.log(this.props.showButton)
		return(
			<div className="homeReveal">
				<div className="homeReveal__content">
					<h1>Hi</h1>
					<div className="homeReveal__overlay" style={{width: this.props.width + '%'}} />
				</div>
				<Button text="Explore" isVisible={this.props.showButton} isActive/>
			</div>
		)
	}
}