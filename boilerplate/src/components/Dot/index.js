import React, { Component } from 'react'
import './style.scss'
import { random } from 'helpers'
export default class Dot extends Component {

	constructor(props){
		super(props)
		const colors = ['grey','cream','maroon']
		this.size = random(5,15)
		this.delay = 10
		this.color = colors[random(0,colors.length)]
		this.timeouts = []
	}

	render(){
		return(
			<div
				className={"dot " + this.color}
				style={{
					height:this.size,
					width:this.size,
					top:this.props.y,
					left:this.props.x
				}}>
			</div>
			
		)
	}
}