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
		this.state = {
			inners: []
		}	
	}

	
	componentWillReceiveProps(np){
		
	}

	componentDidMount(){
		
	}

	animate(delay){
		
	}

	render(){
		return(
			<div
				className={"dot " + this.color}
				style={{
					position: this.props.absolute ? 'absolute' : 'relative',
					transform: 'translate(-50%,-50%)',

					height:this.size,
					width:this.size,
					top:this.props.y,
					left:this.props.x
				}}>
			</div>
			
		)
	}
}