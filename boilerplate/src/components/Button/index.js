import React, { Component } from 'react'
import './style.scss'
import MouseHandlerComponentWrapper from 'components/MouseHandlerComponentWrapper'
export default class Button extends Component {

	onClick(){
		if(this.props.onClick) this.props.onClick()
	}

	render(){
		return(
			<MouseHandlerComponentWrapper>
				<div
					onClick={this.onClick.bind(this)} 
					className={this.props.isVisible ? "button isVisible" : 'button'}>
					<h5>{this.props.text}</h5>
				</div>
			</MouseHandlerComponentWrapper>
		)
	}
}