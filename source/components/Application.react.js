import React from 'react';
import CompanySection from './CompanySection.react';
import Notifications from './Notifications.react';

class Application extends React.Component {
	constructor(props) {
	   super(props);
	}
	
	render() {
		return (
			  <div>
				 <Notifications />
				 <hr/>
				 <CompanySection />
			  </div>	
		  );
	}
}; 

export default Application; 