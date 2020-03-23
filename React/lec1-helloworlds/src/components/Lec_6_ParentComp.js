import React, { Component } from 'react';
import ChildComp from './Lec_6_ChildComp'

class ParentComp extends Component {
    
    constructor()
    {
        super()
        this.state = {
            parentName : "Parent"
        }
        this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler(childName)
    {
        alert("Hello " + this.state.parentName + " from a " +  childName)
    }
    
    render() {
        return (
            <div>
                <ChildComp name={this.greetHandler}></ChildComp>
            </div>
        );
    }
}

export default ParentComp;