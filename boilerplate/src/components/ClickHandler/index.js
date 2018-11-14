import React, { Component } from 'react'
import './style.scss'
import ClickEffect from 'effects/test'

export default class Splash extends Component {

	constructor(props){
		super(props)
		this.constraints = [{delay: 0, max: 10},{delay:25, max:12}]
		this.state = {
			toggle: true,
			click: null
		}
		this.timeouts = []
	}

	onClick(e){
		// let constraint = this.constraints[this.state.toggle ? 0 : 1]
		let constraint = this.constraints[1]
		this.setState({toggle: !this.state.toggle, click: {x: e.pageX, y: e.pageY, delay: constraint.delay, max: constraint.max}})
	}

	render(){
		return(
			<div className="splash" onClick={this.onClick.bind(this)}>	
				<ClickEffect {...this.state.click} />
			</div>
		)
	}
}