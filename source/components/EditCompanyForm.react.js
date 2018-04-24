import React from 'react';
import Button from './Button.react';
import PropTypes from 'prop-types';
import CompanyHelper from '../helpers/CompanyHelper';

class EditCompanyForm extends React.Component { 
	constructor(props) {
	   super(props);

	   this.submit = this.submit.bind(this);
	}
	
  componentDidMount() {
    this.companyInput.focus(); // a good case for using ref
  }

    submit(id) {
		this.props.onSubmit(id, CompanyHelper.constructCompanyFromFields(this));
    }

	render() {
	  return (
				<form action="">
				  <input type="hidden" name="id" id="id" value={this.props.current.id}/> 
				  <label>ID:</label>&nbsp;<span>{this.props.current.id}</span>
				  <br/><br/>		
				  <label htmlFor="company">Company Name:</label><br/>
				  <input type="text" name="company" id="company" placeholder="Company" defaultValue={this.props.current.company} ref={input => this.companyInput = input}/>
				  <br/><br/>
				  <label htmlFor="country">Country:</label><br/>
				  <input type="text" name="country" id="country" placeholder="Country" defaultValue={this.props.current.country} ref={input => this.countryInput = input}/>
				  <br/><br/>
				  <label htmlFor="contact">Contact Person:</label><br/>
				  <input type="text" name="contact" id="contact" placeholder="Contact" defaultValue={this.props.current.contact} ref={input => this.contactInput = input}/>
				  <br/><br/>		  
				  <Button args={this.props.current.id} onClick={this.submit} value="Submit"/>&nbsp;<Button onClick={this.props.onCancel} value="Cancel"/>
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
