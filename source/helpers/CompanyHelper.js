import CompanyStore from '../stores/CompanyStore';

function constructGetInitialState() {
		return { title: "A list of companies", mode: "list", current: {} };
};

export default {
	constructCompanyFromFields(document) {
		let company = {
			company: document.getElementById("company").value,
			country: document.getElementById("country").value,
			contact: document.getElementById("contact").value
		}
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