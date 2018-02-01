import React from 'react';



export default class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			counter: 0,
			click: 0
		}
	}
	
	handleClick(){
		var click = this.state.click
		var counter = this.state.counter
		this.setState({click: click + 1})
		if(click % 2 == 0) {
			this.setState({counter: counter + 1})
		}
	}
	
  render() {
    return (
		<div>
			<h1>{this.state.counter}</h1>
			<button onClick={this.handleClick.bind(this)}>click!</button>
			<p>Clicks : {this.state.click}</p>
		</div>
    );
  }
}

