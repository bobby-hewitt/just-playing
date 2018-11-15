import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
//components
import MouseHandler from 'components/MouseHandler'
import HomeReveal from 'components/HomeReveal'


class Home extends Component {

	constructor(props){
		super(props)
		this.state = {
			count: 0,
			reveal: 100,
		}
	}

	onMouseMove(){
		if (this.state.reveal > 0){
			this.setState({
				count: this.state.count += 1,
				reveal: 100 - this.state.count * 5
			})
		} 
	}
	onMouseUp(){
		if (this.state.reveal <= 0){
			setTimeout(() => {
				this.setState({
					showButton: true
				})
			},700)
		}
	}
	render(){
		return(
			<div className="home container-fluid">
				
				<HomeReveal 
					width={this.state.reveal} 
					showButton={this.state.showButton}
				/>
				{!this.state.showButton &&
					<MouseHandler 
						onMouseMove={this.onMouseMove.bind(this)}
						onMouseUp={this.onMouseUp.bind(this)}
					/>
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  push: (path) => push(path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)