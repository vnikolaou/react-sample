import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component { 
	constructor(props) {
	   super(props);
	   
	   this.onClick = this.onClick.bind(this);
	}
	
	onClick(event) {
		this.props.onClick.apply(this, Array.isArray(this.props.args) ? 
			this.props.args: [this.props.args]);
	}
	
	render() {
	  return (
		<input type="button" value={this.props.value} onClick={this.onClick}/>
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