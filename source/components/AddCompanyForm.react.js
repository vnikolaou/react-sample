import React from 'react';
import Button from './Button.react';
import PropTypes from 'prop-types';
import CompanyHelper from '../helpers/CompanyHelper';

class AddCompanyForm extends React.Component { 
	constructor(props) {
	   super(props);

	   this.submit = this.submit.bind(this);
	}
	
  componentDidMount() {
    this.companyInput.focus(); // a good case for using ref
    this.submitButton.setColor('green');  // valid but can also be done via props and by delegating responsibility to button itself
    this.$countryInput = $(this.countryInput);
    this.$countryInput.pickadate();
  }

  componentWillUnmount() {
  //  this.$countryInput.chosen('destroy');
  }

    submit() {
		this.props.onSubmit(CompanyHelper.constructCompanyFromFields(this));
    }

	render() {
	  return (
				<form action="">
				  <input type="hidden" name="id" id="id" value="0"/> 
				  <label htmlFor="company">Company Name:</label><br/>
				  <input type="text" name="company" id="company" placeholder="Company" ref={input => this.companyInput = input}/>
				  <br/><br/>
				  <label htmlFor="country">Country:</label><br/>
				  <input type="text" name="country" id="country" placeholder="Country" ref={input => this.countryInput = input}/>
				  <br/><br/>
				  <label htmlFor="contact">Contact Person:</label><br/>
				  <input type="text" name="contact" id="contact" placeholder="Contact" ref={input => this.contactInput = input}/>
				  <br/><br/>		 
				  <Button onClick={this.submit} value="Submit" ref={(input) => { this.submitButton = input} }/>&nbsp;<Button onClick={this.props.onCancel} value="Cancel"/>		
				</form> 
	  );
	}
};

AddCompanyForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onCancel: PropTypes.func.isRequired,  
}

export default AddCompanyForm; 
