import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component { 
	constructor(props) {
	   super(props);
	   
	   this.onClick = this.onClick.bind(this);  // this is required since it is event handler 
	   this.setColor = this.setColor.bind(this); // this seems to be not required actually 
	}

	onClick(event) {
		this.props.onClick.apply(this, Array.isArray(this.props.args) ? 
			this.props.args: [this.props.args]);
	}

	setColor(color) { // prob. not the best way; can also be done internally inside componentDidMount and based conditionally (or not) on props
		this.button.style.color = color;
	}

	render() {
	  return (
		<input type="button" value={this.props.value} onClick={this.onClick} ref={input => this.button = input}/>
	  );
	}
};

Button.propTypes = {
   args: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
   ]),   
   value: PropTypes.string.isRequired,
   onClick: PropTypes.func,  
}

export default Button; 
