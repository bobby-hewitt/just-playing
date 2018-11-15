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

	onMouseMove(evt, isTouch){
		if (this.state.mouseDown){
			let isTouch = evt.nativeEvent && evt.nativeEvent.touches && evt.nativeEvent.touches[0]
			let x = isTouch ? evt.nativeEvent.touches[0].clientX : evt.clientX
			let y = isTouch ? evt.nativeEvent.touches[0].clientY : evt.clientY
			this.setState({mouse: {x, y}})
		}	
	}

	onRotatingDots(e){
		this.setState({rotatingDots: {x: this.state.mouse.x, y: this.state.mouse.y, delay: 25, max: 12}}, () => {
			setTimeout(() => this.setState({rotatingDots: false}), 500)
		})
	}

	onFollowDots(e){
		let newDots = this.state.dots 
		let newDot = {x: this.state.mouse.x, y: this.state.mouse.y}
		newDots.push(newDot)
		this.setState({dots: newDots}, () => {
			this.animationFrame = requestAnimationFrame(this.onFollowDots.bind(this, {x: this.state.mouse.x, y: this.state.mouse.y}))
		})
	}

	onMouseDown(){
		this.setState({mouseDown: true}, () => {
			this.onFollowDots()
		})
	}

	onMouseUp(e){
		if (e.persist) e.persist()
		cancelAnimationFrame(this.animationFrame)
		this.setState({mouseDown: false, dots: []}, () => {
			this.onRotatingDots(e)
		})
	}



	render(){

		return(
			<div 
				className="mouseHandler" 
				onMouseMove={this.onMouseMove.bind(this)} 
				onMouseDown={this.onMouseDown.bind(this)} 
				onMouseUp={this.onMouseUp.bind(this)}
				onTouchMove={this.onMouseMove.bind(this)} 
				onTouchStart={this.onMouseDown.bind(this)} 
				onTouchEnd={this.onMouseUp.bind(this)}>
				{this.state.mouseDown && this.state.dots.map((d,i) => {
					return(
						<Dot absolute key={i} {...d}/>
					)
				})}
				{this.state.rotatingDots && 
					<Test {...this.state.rotatingDots} />
				}
			</div>
		)
	}
}