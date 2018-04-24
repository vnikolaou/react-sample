import React from 'react';
import Button from './Button.react';
import CompanyStore from '../stores/CompanyStore';
import PropTypes from 'prop-types';


class CompanyList extends React.Component { 
	constructor(props) {
	   super(props);
	}

	render() {
	  const companies = CompanyStore.getCompanies();
	  
	  const list = companies.map(c =>{
           return (
			  <tr key={c.id}>
				<td>{c.id}</td>
				<td>{c.company}</td>
				<td>{c.contact}</td>
				<td>{c.country}</td>
				<td>
				  <Button args={c.id} onClick={this.props.onEdit} value="Edit"/>
				  &nbsp;
				  <Button args={c.id} onClick={this.props.onDelete} value="Delete"/>
				</td>
			  </tr>
           );
      });
          
	  
	  return (
			<table>
			  <thead>
			  <tr>
				<th>ID</th>
				<th>Company</th>
				<th>Contact</th>
				<th>Country</th>
				<th width="10%">Actions</th>
			  </tr>
			  </thead>
			  <tbody>
			  {list}
			  </tbody>
			</table>
	  );
	}
};

CompanyList.propTypes = {
   onEdit: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,  
}

export default CompanyList; 
