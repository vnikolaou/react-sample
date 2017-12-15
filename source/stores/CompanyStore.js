import AppDispatcher from '../dispatcher/AppDispatcher';
import Events from 'events';
import assign from 'object-assign';

const EventEmitter = Events.EventEmitter;

const CHANGE_EVENT = 'change';

const companies = [
				{"id":100, "company":"Alfreds Futterkiste", "contact":"Maria Anders", "country":"Germany"},
				{"id":101, "company":"Centro comercial Moctezuma", "contact":"Francisco Chang", "country":"Mexico"},
				{"id":102, "company":"Ernst Handel", "contact":"Roland Mendel", "country":"Austria"},	
				{"id":103, "company":"Island Trading", "contact":"Helen Bennett", "country":"UK"},
				{"id":104, "company":"Laughing Bacchus Winecellars", "contact":"Yoshi Tannamuri", "country":"Canada"},
				{"id":105, "company":"Magazzini Alimentari Riuniti", "contact":"Giovanni Rovelli", "country":"Italy"}
			];

let message = "";

function insertCompany(company) {
	let len = companies.length
	let id = len > 0 ? (companies[len - 1].id + 1) : 100;
	company.id = id;
	companies.push(company); 
	message = "The new company " + company.company + " was inserted";	
}

function updateCompany(id, company) {
	let oldCompany = getCompany(id);
	oldCompany.company = company.company;
	oldCompany.country = company.country;
	oldCompany.contact = company.contact;
	message = "The company " + oldCompany.company + " has changed";
}

function deleteCompany(id) {
	for(let i=0;i<companies.length;i++) {
	//for(const [index, elem] of companies) {
		if(companies[i].id === id) {
		   let company = companies[i];
		   companies.splice(i, 1);
		   message = "The company " + company.company + " has been deleted";
		}
	}
}

function getCompany(id) {
  for(const elem of companies) {
	if(elem.id === id) {
		return elem;
	}
  }
}

function emitChange() {
  CompanyStore.emit(CHANGE_EVENT);
}

const CompanyStore = assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getCompanies() {
    return companies;
  },
  
  getCompany(id) {
    return getCompany(id);
  },
  
  getMessage() {
    console.log(message);
	return message;
  }
});

function handleAction(action) {
  switch (action.type) {
    case 'insert_company':
      insertCompany(action.company);
      emitChange();
      break;
	  
    case 'update_company':
      updateCompany(action.id, action.company);
      emitChange();
      break;

    case 'delete_company':
      deleteCompany(action.id);
      emitChange();
      break;	  

    default: 
  }
}

CompanyStore.dispatchToken = AppDispatcher.register(handleAction);

export default CompanyStore;