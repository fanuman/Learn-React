import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    onInputChangeHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleSubmitChange = (event) => {
        alert(this.state.username)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitChange} >
                    <label>User Name1</label>
                    <input type="text" value={this.state.username} onChange={this.onInputChangeHandler} /><br></br>
                    <label>User Name2</label>
                    <input type="text" value={this.state.username} onChange={this.onInputChangeHandler} /><br></br>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Form;