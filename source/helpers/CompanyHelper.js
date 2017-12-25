import CompanyStore from '../stores/CompanyStore';

function constructGetInitialState() {
		return { title: "A list of companies", mode: "list", current: {} };
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
		return { title: "Add Company", mode: "add", current: {} };
	},
	 constructOnInsertCompany() {
		return constructGetInitialState();
	},
	  constructOnEdit(id) {
		return { title: "Edit Company", mode: "edit", current: CompanyStore.getCompany(id) };
	},
	constructOnUpdateCompany() {
		return constructGetInitialState();
	},  
	constructOnCancelForm() {
		return constructGetInitialState();
	} 
};