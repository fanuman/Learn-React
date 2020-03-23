import React from 'react'

class Hello extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            message:"Hello"
        }

        // For Method 3 
        // this.EventHandler = this.EventHandler.bind(this)
    }

    // Used for Method 1, 2, 3
    // EventHandler()
    // {
    //     this.setState({
    //         message : "Good By"
    //     })
    // }

    EventHandler = () => {
        this.setState({
                    message : "Good By"
                })
    }

    render()
    {
        return(
            <div>
                <p>{this.state.message}</p>
                {/* Method  # 1 */}
                {/* <button onClick= {this.EventHandler.bind(this)}>Click Me</button> */}
                {/* Method # 2 */}
                {/* <button onClick= {() => this.EventHandler()}>Click Me</button> */}
                {/* Method # 3 */}
                {/* <button onClick= {this.EventHandler}>Click Me</button> */}
                {/* Method # 4 */}
                <button onClick= {this.EventHandler}>Click Me</button>
            </div>
        )
    }
}
export default Hello