import React, { Component } from 'react'
import './style.scss'

export default class Test extends Component {

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
		// this.animate()
	}

	componentDidMount(){
		this.animate()
	}

	random(min, max){
		return (Math.floor(Math.random() * max)) + min
	}

	animate(delay){
		this.setState({inners: []}, () => {
			for (var i = 0; i < this.props.max; i++){
				this.timeouts[i] = setTimeout(() => {
					let inners = Object.assign([], this.state.inners)
					inners.push(this.random(5,15) + 'px')
					this.setState({inners: inners})
				}, i * this.props.delay)
			}
		})
	}

	render(){
		
		return(
			<div 
				className="effect__test--container" 
				style={{
					top: this.props.y,
					left: this.props.x
				}}
			>
				{this.state.inners.map((c, i) => {
					return(
						<div className="relative" key={i} style={{transform:`rotate(${(i-this.props.max / 2) * (360 / this.props.max)}deg)`}} >
							<div className={"effect__test--inner " + this.colors[i % this.colors.length-1]} style={{width: c, height:c}}>
							</div>
						</div>
					)
				})}
			</div>
			
		)
	}
}