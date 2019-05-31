import React, { Component } from 'react';
import 'tachyons';

class Clock extends Component{
	constructor(){
		super()
		this.state= {date: new Date()};
	}

	render(){
		return(
			<div className= 'tr'>
			<h6 className= 'light-red'> Poll Start: {this.state.date.toLocaleTimeString()}</h6>
			</div>
		);
	}
}

export default Clock;