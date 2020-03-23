import React, {Component} from 'react'
import './../Post.css'

class Post extends React.Component
{
    constructor()
    {
        super()
    }
    render(){
        return(
            <div className={this.props.className}>
                <p>Hello I am Numan: Like Count : {this.props.count}</p>
                <button onClick={this.props.onClick}>Like</button>
            </div>
        )
    }

}

export default Post