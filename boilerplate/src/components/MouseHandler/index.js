import React, { Component } from 'react'
import './style.scss'
import Dot from '../Dot'
import { random } from '../../helpers'
export default class MouseHandler extends Component {

	constructor(props){
		super(props)
		this.timeouts = []
		this.state = {
			mouse: {x: 0, y:0}
		}
	}
	//cleanup
	componentWillUnmount(){
		for (var i in this.timeouts) clearTimeout(this.timeouts[i])
		cancelAnimationFrame(this.animationFrame)
	}
	//mouse handlers
	getXY(evt){
		let isTouch = evt.nativeEvent && evt.nativeEvent.touches && evt.nativeEvent.touches[0]
		let x = isTouch ? evt.nativeEvent.touches[0].clientX : evt.clientX
		let y = isTouch ? evt.nativeEvent.touches[0].clientY : evt.clientY
		return {x,y}
	}
	onMouseDown(e){
		this.setState({mouseDown: true, mouse: this.getXY(e)}, () => {
			this.onFollowDots()
		})
	}
	onMouseUp(e){
		if (e.persist) e.persist()
		cancelAnimationFrame(this.animationFrame)
		this.setState({mouseDown: false, followDots: []}, () => {
			this.props.onMouseUp()
			this.onRotatingDots(e)
		})
	}
	onMouseMove(evt, isTouch){
		if (this.state.mouseDown){
			this.setState({mouse: this.getXY(evt)}, () => {
				this.props.onMouseMove()
			})
		}	
	}
	//animations
	onRotatingDots(e){
		this.setState({rotatingDots: []}, () => {
			for (var i = 0; i < 12; i++){
				this.timeouts[i] = setTimeout(() => {
					let rotatingDots = Object.assign([], this.state.rotatingDots)
					rotatingDots.push(random(5,15) + 'px')
					this.setState({rotatingDots: rotatingDots})
				}, i * 25)
			}
		})
	}
	onFollowDots(e){
		let newDots = this.state.followDots || []
		let newDot = {x: this.state.mouse.x, y: this.state.mouse.y}
		newDots.push(newDot)
		this.setState({followDots: newDots}, () => {
			this.animationFrame = requestAnimationFrame(this.onFollowDots.bind(this, {x: this.state.mouse.x, y: this.state.mouse.y}))
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
				{this.state.mouseDown && this.state.followDots && this.state.followDots.map((d,i) => {
					return(
						<Dot key={i} {...d}/>
					)
				})}
				{this.state.rotatingDots && 
					<div className="mouseHandler__rotate--container"style={{top: this.state.mouse.y, left: this.state.mouse.x }} > 
						{this.state.rotatingDots.map((d, i) => {
							return(
								<div className="relative" key={i} style={{transform:`rotate(${(i-12 / 2) * (360 / 12)}deg)`}} >
									<Dot />
								</div>
							)
						})}
					</div>
				}
			</div>
		)
	}
}