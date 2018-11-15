import React, { Component } from 'react'
import './style.scss'

export default class Button extends Component {
	render(){
		return(
			<div className={this.props.isVisible ? "button isVisible" : 'button'}>
				{this.props.text}
			</div>
		)
	}
}