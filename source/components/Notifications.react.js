import React from 'react';
import CompanyStore from '../stores/CompanyStore';
 
class Notifications extends React.Component { 
	constructor(props) {
	   super(props);
	   
	   this.state = {
		  message: ""
	   };	  
	   
	   this.onCompanyChange = this.onCompanyChange.bind(this);
	}
	
	  componentDidMount () {
		CompanyStore.addChangeListener(this.onCompanyChange);
	  }

	  componentWillUnmount () {
		CompanyStore.removeChangeListener(this.onCompanyChange);
	  }

	  onCompanyChange () {
		this.setState({
		  message: CompanyStore.getMessage()
		});
	  }
  
	 render() {	
	  return (    
		<div >
		  Notification: {this.state.message}
		</div>
		)
	}
};

export default Notifications; 