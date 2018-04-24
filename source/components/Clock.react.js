import React from 'react';

class Clock extends React.Component { 
	constructor(props) {
	   super(props);
	   this.state = {
		currentTime: new Date()
		}
	}

	componentDidMount() {
	    this.timerID = setInterval(
	      () => this.tick(),
	      1000
	    );		
	}

	componentWillUnmount() {
	    clearInterval(this.timerID);	
	}

	tick() {
	   this.setState({
		currentTime: new Date()
		});
	 }

	render() {
	  return (
		  <div>
			Current time: 
			{this.state.currentTime.toLocaleTimeString()}
		  </div>	
	  );
	}
}; 

export default Clock; 
