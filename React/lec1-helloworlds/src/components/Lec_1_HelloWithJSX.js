import React from 'react'

const Hello = () =>{
    // Using JSX Syntax
    // return(
    //     <div>
    //         <h1>Hello Numan</h1>
    //     </div>
    // )
    return React.createElement('div',
    {id: 'id1', className :'class1'},
    React.createElement('h1', null, 'Hello Numan')
    )
}


export default Hello