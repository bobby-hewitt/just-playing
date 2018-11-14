import React, { Component } from 'react'
import './style.scss'
import Dot from 'effects/dot'
import Test from 'effects/test'
export default class MouseHandler extends Component {

	constructor(props){
		super(props)
		this.colors = ['grey','cream','maroon','orange','brown','brown2','rose','peach']
		this.state = {
			clicked: false,
			dots: [],
			mouse: {x: 0, y:0}
		}
	}

	onMouseMove(evt){
		// let data = {x: evt.clientX, y:evt.clientY}
		this.setState({mouse: {x: evt.clientX, y:evt.clientY}})
	}

	onClick(e){
		if (this.state.toggle){
			this.onRotatingDots(e)
		} else {
			this.onFollowDots(e)
		}
	}

	onRotatingDots(e){
		this.setState({toggle: !this.state.toggle, click: {x: e.pageX, y: e.pageY, delay: 25, max: 12}}, () => {
			setTimeout(() => this.setState({click: false}), 1500)
		})
	}

	onFollowDots(){
		this.setState({clicked: true, toggle: !this.state.toggle}, () => {
			this.animate()
			setTimeout(() => {
				this.setState({clicked:false, dots: []})
				cancelAnimationFrame(this.animationFrame)
			},1500)
		})
	}

	componentDidMount(){
		
	}

	random(min, max){
		return (Math.floor(Math.random() * max)) + min
	}

	animate(e){
		let newDots = this.state.dots 
		let newDot = {x: this.state.mouse.x, y: this.state.mouse.y}
		newDot.size = this.random(5,15)
		newDot.color = this.colors[this.random(0,this.colors.length)]
		newDots.push(newDot)
		if (newDots.length > 50){
			newDots.splice(0,1)
		}
		this.setState({dots: newDots}, () => {
			this.animationFrame = requestAnimationFrame(this.animate.bind(this, {x: this.state.mouse.x, y: this.state.mouse.y}))
		})
		
	}



	render(){

		return(
			<div className="mouseHandler" onMouseMove={this.onMouseMove.bind(this)} onClick={this.onClick.bind(this)}>
				{this.state.clicked && this.state.dots.map((d,i) => {
					return(
						<Dot key={i} {...d}/>
					)
				})}
				{this.state.click && 
					<Test {...this.state.click} />
				}
			</div>
		)
	}
}