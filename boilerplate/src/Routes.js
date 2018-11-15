
import React, { Component } from 'react';
import { Route } from 'react-router'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MouseEffects from './components/MouseEffects'
import { setMouseHandler } from 'actions/ui'
import Home from 'containers/Home'
class Routes extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	onMouseMove(){

	}

	onMouseUp(){

	}

	onMouseHandlerMount(mouseHandler){
		this.props.setMouseHandler(mouseHandler)
	}

	render(){
		return(
			<div className="app__container">
		        <Route exact path="/" component={Home} />
		        <MouseEffects
					onMount={this.onMouseHandlerMount.bind(this)}
					onMouseMove={this.onMouseMove.bind(this)}
					onMouseUp={this.onMouseUp.bind(this)}
				/>
		    </div>
		)
	}
}


const mapStateToProps = state => ({
	

})

const mapDispatchToProps = dispatch => bindActionCreators({
	setMouseHandler,
	push: (path) => push(path)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)