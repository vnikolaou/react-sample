import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component { 
	constructor(props) {
	   super(props);
	}
	
	render() {
	  return (
		<section>
			<h2>{this.props.value}</h2>
			<hr/>
			<br/><br/>
		</section>
	  );
	}
};

Title.propTypes = {
   value: PropTypes.string
}

Title.defaultProps = {
  value: '<Name me>'
};

export default Title; 