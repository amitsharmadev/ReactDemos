import React, { Component } from 'react'

export class CreateCustomer extends Component {

    AddCustomer(e){
        console.log("Add Customer Called");
        this.props.onCustomerAdd(this.state);
    }

    ChangeName(e){
        this.setState({name:e.target.value});
    }
    ChangeAddress(e){
        this.setState({address:e.target.value});
    }
    constructor(props){
        super(props);
        this.ChangeAddress=this.ChangeAddress.bind(this);
        this.ChangeName=this.ChangeName.bind(this);
        this.AddCustomer=this.AddCustomer.bind(this);
    }
    render() {
        console.log(this.state);
        return (
        
        <div>
            <table>
                <tbody>
                <tr>
                    <td>Customer Name</td>
                    <td><input onChange={this.ChangeName} type="text"></input></td>
                </tr> 
                <tr>
                    <td>Customer Address</td>
                    <td><input onChange={this.ChangeAddress} type="text"></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button onClick={this.AddCustomer} type="button">Add</button></td>
                </tr>
                </tbody>
             </table>
            </div>
        )
    }
}

export default CreateCustomer
