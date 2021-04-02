import React, { Component } from 'react';
import '../index.css';

class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    
    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    
    //display only user type=>designer
    renderBasedOnUserType = () =>{
        const data = this.state.userData;
        const mapRows = data.filter((item) => (item.user_type=="Designer")).map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    //display starting letter with J in name
    renderBasedStartingLetter = () =>{
        const data = this.state.userData;
        const mapRows = data.filter((item) => (item.name.startsWith("J",0))).map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    //display based on age
    renderBasedOnAge = () =>{
        const data = this.state.userData;
        const mapRows = data.filter((item) => (item.age>28&&item.age<=50)).map((item)=>(
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
            </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    //display based on age
    renderfindexperience = () =>{
        const data = this.state.userData;
        const mapRows = data.filter((item) => (item.user_type=="Designer")).reduce((sum,item)=>
        {return item.years+sum},0);
        return mapRows;
    }

    render() {
        return (
            <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
            <h1>Display Based on User Type</h1>
            <div className="display-box">
            <ul>{this.renderBasedOnUserType()} </ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderBasedStartingLetter()} </ul>
            </div>
            <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderBasedOnAge()} </ul>
            </div>
            <h1>Find the total years of the designer</h1>
            <div className="display-box">
            <ul>{this.renderfindexperience()} </ul>
            </div>
          </React.Fragment>
        );
    }
}

export default HigherOrderComponent;