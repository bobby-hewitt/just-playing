import React, { Component } from 'react'
import './style.scss'

export default class Dot extends Component {

	constructor(props){
		super(props)
		this.delay = 10
		this.colors = ['grey','cream','maroon']
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
				
				className={"dot " + this.props.color}
				style={{
					height:this.props.size,
					width:this.props.size,
					top:this.props.y,
					left:this.props.x
				}}>
			</div>
			
		)
	}
}