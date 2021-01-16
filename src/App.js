import './App.css';
import {Component} from 'react';
//import Component3 from './component3/Component3';
import CreateCustomer from './CreateCustomer/CreateCustomer';
class App extends Component {
   customers=[];
  myEventHandler(data){
    this.customers.push({name:data.name,address:data.address});
    console.log(this.customers.length);
    this.setState({count:this.customers.length});
  //this.setState({customers:customers.push({name:data.name,address:data.address});

  }
  constructor(props)
  {
    super(props);
    this.state={customers:null};
    this.myEventHandler=this.myEventHandler.bind(this);
  }
  render(){
   return (
    <div className="App">
      {/* <Component3 abc="Somethig" demoData="TestData"></Component3>  */}
      
      {/* Caller/Container can pass data via Props to the containee */}
      {/* Containee can pass the data to Container/Caller via event propagation */}
       
      <CreateCustomer onCustomerAdd={this.myEventHandler}  />
      <label>Total Customers : {this.state.count}</label>
    </div>
    );
  }
}

export default  App;
