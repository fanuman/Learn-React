import React, { Component } from 'react'
import Post from './posts.js'

class Timeline extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            count : 0,
        }
    }

    incrementCount()
    {
        let count = this.state.count
        count++
        this.setState({count: count})
    }

    renderPost()
    {
        return (<div className="posts-container">
            <Post className="post-black post" count={this.state.count} onClick={() => this.incrementCount()}></Post>
            <Post className="post-green post" count={this.state.count} onClick={() => this.incrementCount()}></Post>
            <Post className="post-crimson post" count={this.state.count} onClick={() => this.incrementCount()}></Post>
        </div>
        )
    }
    
    render(){
        return(
            <div>
                {this.renderPost()}
            </div>
        );
    }
    displayPost(item, index) {
        
      }
}
export default Timeline