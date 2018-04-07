import React, { Component } from 'react';
import './Style.css'
import {connect} from 'react-redux'
import {toogleButton} from '../actions'

class App extends Component {
	constructor(props){
		super(props) 
		this.state={
			toggle: false
		}
	}
	handleToggle = () => {
		const {onChangeToggleButton} = this.props
		this.setState({
			toggle: !this.state.toggle
		})
		onChangeToggleButton(this.state.toggle)

	}
  render() {
		const {toggleFromStore} = this.props // from store

    return (
      <div style={{display: 'flex', justifyContent:'center', alignItems:'center',padding: 100, height: 100}} >
				<div onClick ={this.handleToggle}>
				{toggleFromStore ? <div style={{backgroundColor:'blue', padding: 10}}>	This is a home page</div> :<div style={{backgroundColor: 'green', padding: 10}}>This is second page</div>}
				</div>
			</div>
    );
  }
}

const mapStateToProps = (state) => ({
	toggleFromStore : state.toggle
})

const mapDispatchToProps = (dispatch) => ({
	onChangeToggleButton: (toggle) => dispatch(toogleButton(toggle))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)