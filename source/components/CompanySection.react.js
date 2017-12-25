import React from 'react';
import Title from './Title.react';
import Button from './Button.react';
import CompanyList from './CompanyList.react';
import AddCompanyForm from './AddCompanyForm.react';
import EditCompanyForm from './EditCompanyForm.react';
import CompanyHelper from '../helpers/CompanyHelper';
import CompanyActionCreators from '../actions/CompanyActionCreators';

function Repeat(props) {
  let result = [];
  let fixedVal = 10;
  for(let i=0; i<props.times; i++) {
	 result.push(props.children(fixedVal,i));
  }
  return <div>{result}</div>;
}

class CompanySection extends React.Component { 
	constructor(props) {
	   super(props);
	   
	   this.state = CompanyHelper.constructGetInitialState();	  
	   
	   this.onAdd = this.onAdd.bind(this);
	   this.onInsertCompany = this.onInsertCompany.bind(this);
	   this.onEdit = this.onEdit.bind(this);
	   this.onUpdateCompany = this.onUpdateCompany.bind(this);
	   this.onDeleteCompany = this.onDeleteCompany.bind(this);
	   this.onCancelForm = this.onCancelForm.bind(this);
	}

	onAdd() {
		this.setState(CompanyHelper.constructOnAddState());
	}
	
	onInsertCompany(company) {
		CompanyActionCreators.insertCompany(company);
		
		this.setState(CompanyHelper.constructOnInsertCompany());
	}

	onEdit(id) {
		this.setState(CompanyHelper.constructOnEdit(id));
	}

	onUpdateCompany(id, company) {
		CompanyActionCreators.updateCompany(id, company);
		
		this.setState(CompanyHelper.constructOnUpdateCompany());
	}
	
	onDeleteCompany(id) {
		CompanyActionCreators.deleteCompany(id);
		
		this.setState({});
	}

	onCancelForm(id) {
		this.setState(CompanyHelper.constructOnUpdateCompany());
	}

	render() {
	  let page;

	  if(this.state.mode === "list") {
             let headers = ["Col11", "Col2", "Col3"];
	     page = (
		    <section>
			  <Button onClick={this.onAdd} value="Add Company"/><br/><br/>
			  <CompanyList onEdit={this.onEdit} onDelete={this.onDeleteCompany}/>
			  <Repeat times={10}>
				 {(base, index) => <div key={index}>This is item {base+index} in the list</div>}
			  </Repeat>
			</section>  
		 );	
	  } else if(this.state.mode === "add") {
	     page = (
		    <section>
				<AddCompanyForm onSubmit={this.onInsertCompany} onCancel={this.onCancelForm} />
			</section>  
		 );	  
	  } else if(this.state.mode === "edit") {
	     page = (
		    <section>
				<EditCompanyForm current={this.state.current} onSubmit={this.onUpdateCompany} onCancel={this.onCancelForm}/>
			</section>  
		 );	  
	  }
	  return (
		  <div>
			<Title value={this.state.title}/>
			{page}
		  </div>	
	  );
	}
}; 

export default CompanySection; 
