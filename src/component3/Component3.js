import React, { Component } from 'react'
// this component represents and demonstrate
//life cycle methods /hooks of react class component
//Functional components can represents life cycle
//methods via hooks
export class Component3 extends Component {
    render() {
        return (
            <div>
                <input type="text"
                    onChange={this.changeData}
                ></input>
                <label>{this.state.txtData}</label>
            </div>
        )
    }
    changeData(e){
        this.setState({txtData:e.target.value});
    }
    constructor(props){
        super(props);
        this.state={};
        console.log("Constructor Called");
        this.changeData=this.changeData.bind(this);
        console.log( this.props.demoData);
        console.log(this.props.abc);
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps event called");
        return null;
    }

   
    
    componentDidMount() {
        console.log("ComponentDidMount event called...");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component didUpdate event called");
    }
    
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("ShouldComponentUpdate event called...");
        return true;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("GetSnapshotBeforeUpdate event called...");
    }
    
    
}

export default Component3
