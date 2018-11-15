import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.scss'
//components
import MouseHandlerComponentWrapper from 'components/MouseHandlerComponentWrapper'


import HomeReveal from 'components/HomeReveal'


class Home extends Component {

	constructor(props){
		super(props)
		this.state ={
			width:0
		}
	}

	onMouseMove(isClicked){
		if (isClicked) this.setState({width: this.state.width + 2})
	}
	

	render(){
		return(
			<MouseHandlerComponentWrapper
				onMouseMove={this.onMouseMove.bind(this)}>
				<div className="home" >
					<HomeReveal 
						width={this.state.width}
						push={this.props.push}
						showButton={this.state.showButton}
					/>	
				</div>
			</MouseHandlerComponentWrapper>
			
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