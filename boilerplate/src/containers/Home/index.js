import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import './style.scss'
//components


class Home extends Component {
	
	render(){
		return(
			<div className="home container-fluid">
				<div className="home__background--container">
					<h1 className="title">HELLO WORLD </h1>
					<div className="home__background--overlay">
						<div className="triangle" />
						<h1 className="title">HELLO WORLD </h1>
					</div>
				</div>
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