import React from 'react';
import Button from './Button.react';
import PropTypes from 'prop-types';

class EditCompanyForm extends React.Component { 
	constructor(props) {
	   super(props);
	}
	
	render() {
	  return (
				<form action="">
				  <input type="hidden" name="id" id="id" value={this.props.current.id}/> 
				  <label>ID:</label>&nbsp;<span>{this.props.current.id}</span>
				  <br/><br/>		
				  <label htmlFor="company">Company Name:</label><br/>
				  <input type="text" name="company" id="company" placeholder="Company" defaultValue={this.props.current.company}/>
				  <br/><br/>
				  <label htmlFor="country">Country:</label><br/>
				  <input type="text" name="country" id="country" placeholder="Country" defaultValue={this.props.current.country}/>
				  <br/><br/>
				  <label htmlFor="contact">Contact Person:</label><br/>
				  <input type="text" name="contact" id="contact" placeholder="Contact" defaultValue={this.props.current.contact}/>
				  <br/><br/>		  
				  <Button args={this.props.current.id} onClick={this.props.onSubmit} value="Submit"/>&nbsp;<Button onClick={this.props.onCancel} value="Cancel"/>
				</form>					
	  );
	}
};

EditCompanyForm.propTypes = {
   current: PropTypes.object.isRequired,
   onSubmit: PropTypes.func.isRequired,  
   onCancel: PropTypes.func.isRequired   
}

export default EditCompanyForm; 