import React from 'react';
import Title from './Title.react';
import Button from './Button.react';
import CompanyList from './CompanyList.react';
import AddCompanyForm from './AddCompanyForm.react';
import EditCompanyForm from './EditCompanyForm.react';
import CompanyHelper from '../helpers/CompanyHelper';
import Clock from './Clock.react';
import CompanyActionCreators from '../actions/CompanyActionCreators';
import ReactDOMServer from 'react-dom/server';

function Repeat(props) {
  let result = [];
  let fixedVal = 10;

  for(let i=0; i<props.times; i++) {
	 result.push(props.children(fixedVal,i));
  }
  return <div>{result}</div>;
}

function Wrapper(props) {
      console.log("count=" + React.Children.count(props.children));
      let arr = React.Children.map(props.children, function(thisArg) { 
		console.log(React.isValidElement(thisArg));
		console.log(thisArg);
		return thisArg;
	})

	return <div>{arr}</div>;
}

function Source() {
    return {
	getData: function(id) {
		if(id==1) {
		   return { id: 1, name: "name1" };
		} else if(id==2) {
                   return { id: 2, name: "name2" };
		}
	   }
	}
}

function wrappedMe(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        data: selectData(new Source(), props)
      };
		console.log(this.state);
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

function Comp1(props) {
   return (
	<span>{props.data.id}:{props.data.name}</span>
   );
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
             try {
		CompanyActionCreators.insertCompany(company);
		
		this.setState(CompanyHelper.constructOnInsertCompany());
             } catch(error) {
   		this.setState({ error });
	     }
	}

	onEdit(id) {
		this.setState(CompanyHelper.constructOnEdit(id));
	}

	onUpdateCompany(id, company) {
             try {
		CompanyActionCreators.updateCompany(id, company);
		
		this.setState(CompanyHelper.constructOnUpdateCompany());
             } catch(error) {
   		this.setState({ error });
	     }
	}
	
	onDeleteCompany(id) {
             try {
		CompanyActionCreators.deleteCompany(id);
		
		this.setState({});
             } catch(error) {
   		this.setState({ error });
	     }
	}

	onCancelForm(id) {
		this.setState(CompanyHelper.constructOnUpdateCompany());
	}

	render() {
	  let page;

	  let Comp2 = <div>Hello</div>;
	  let sc1 = { __html: "<script>window.alert(111)</script>" };
	  const WrappedComp1 = wrappedMe(
	     Comp1,
	    (DataSource, props) => DataSource.getData(props.id)
	  );

	  if(this.state.mode === "list") {
             let headers = ["Col11", "Col2", "Col3"];
	     page = (
		    <section>
			  <Button onClick={this.onAdd} value="Add Company"/><br/><br/>
			  <CompanyList onEdit={this.onEdit} onDelete={this.onDeleteCompany}/>
			  <Repeat times={10}>
				 {(base, index) => <div key={index}>This is item {base+index} in the list</div>}
			  </Repeat>
			<WrappedComp1 id="2"/>
			<Wrapper><div>1</div><div>2</div></Wrapper>
			{Comp2}
			<Clock />
			</section>  
		 );	
	  } else if(this.state.mode === "add") {
	     page = (
		    <section>
 				<div dangerouslySetInnerHTML={sc1} />
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
 
          let s1 = ReactDOMServer.renderToString(page);
          let s2 = ReactDOMServer.renderToStaticMarkup(page);
	  console.log("s1=" + s1);
	  console.log("s2=" + s2);

	  return (
		  <div>
			<Title value={this.state.title}/>
			{this.state.error && (<div style={{color:'red'}}>Caught an error.<br/><br/></div>)}
			{page}
		  </div>	
	  );
	}
}; 

export default CompanySection; 
