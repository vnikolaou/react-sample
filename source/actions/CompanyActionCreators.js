import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
  insertCompany(company) {
	 let action = {
		type: 'insert_company',
		company: company
	 };
     AppDispatcher.dispatch(action);
  },
  
  updateCompany(id, company) {
	 let action = {
		type: 'update_company',
		id: id,
		company: company
	 };
     AppDispatcher.dispatch(action);
  } ,

  deleteCompany(id) {
	 let action = {
		type: 'delete_company',
		id: id
	 };
     AppDispatcher.dispatch(action);
  }
}; 