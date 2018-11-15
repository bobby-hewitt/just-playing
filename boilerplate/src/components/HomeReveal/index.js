import React, { Component } from 'react'
import './style.scss'

export default class HomeReveal extends Component {

	

	render(){
		return(
			<div className="homeReveal">
			
				<div className={this.props.width >= 100 ? "homeReveal__title hidden" : "homeReveal__title"}>
					<h5>Click drag to load</h5>
				</div>
			
				<div className={this.props.width >= 100 ? "homeReveal__scrubber full" : "homeReveal__scrubber"}>
					<div className="homeReveal__scrubber--inner" style={{width:this.props.width + '%'}} />
				</div>
			</div>
		)
	}
}