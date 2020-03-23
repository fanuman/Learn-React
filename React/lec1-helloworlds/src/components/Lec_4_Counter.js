import React from 'react'

class Counter extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            count:0
        }
    }

    increment()
    {
        // Simple State Change
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log(this.state.count)} )
        
        // State change based on previous value
        this.setState( (prevState) => ({
            count : prevState.count + 1
        }), console.log(this.props.countValue) )

    }

    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }


    render()
    {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick= {() => this.increment()}>Increment of 1</button>
                <h1>Count : {this.state.count}</h1>
                <button onClick= {() => this.incrementFive()}>Increment of 5</button>
            </div>
        )
    }
}
export default Counter