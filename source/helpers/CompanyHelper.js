import CompanyStore from '../stores/CompanyStore';

function constructGetInitialState() {
		return { title: "A list of companies", mode: "list", current: {}, error: null };
};

export default {
	constructCompanyFromFields(_this) {
		let company = {
			company: _this.companyInput.value,
			country: _this.countryInput.value,
			contact: _this.contactInput.value
		}
		console.log(JSON.stringify(company));
		return company;		
	},
	
	 constructGetInitialState,
	 
	 constructOnAddState() {
		return { title: "Add Company", mode: "add", current: {}, error: null  };
	},
	 constructOnInsertCompany() {
		return constructGetInitialState();
	},
	  constructOnEdit(id) {
		return { title: "Edit Company", mode: "edit", current: CompanyStore.getCompany(id) , error: null };
	},
	constructOnUpdateCompany() {
		return constructGetInitialState();
	},  
	constructOnCancelForm() {
		return constructGetInitialState();
	} 
};
