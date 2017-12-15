import React from 'react';
import Button from './Button.react';
import PropTypes from 'prop-types';

class AddCompanyForm extends React.Component { 
	constructor(props) {
	   super(props);
	}
	
	render() {
	  return (
				<form action="">
				  <input type="hidden" name="id" id="id" value="0"/> 
				  <label htmlFor="company">Company Name:</label><br/>
				  <input type="text" name="company" id="company" placeholder="Company"/>
				  <br/><br/>
				  <label htmlFor="country">Country:</label><br/>
				  <input type="text" name="country" id="country" placeholder="Country"/>
				  <br/><br/>
				  <label htmlFor="contact">Contact Person:</label><br/>
				  <input type="text" name="contact" id="contact" placeholder="Contact"/>
				  <br/><br/>		 
				  <Button onClick={this.props.onSubmit} value="Submit"/>&nbsp;<Button onClick={this.props.onCancel} value="Cancel"/>		
				</form> 
	  );
	}
};

AddCompanyForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onCancel: PropTypes.func.isRequired,  
}

export default AddCompanyForm; 