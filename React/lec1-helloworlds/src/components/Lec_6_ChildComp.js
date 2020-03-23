import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <button onClick={() => props.name('Child 1')}>Greet Parent From Child</button>
        </div>
    )
}
export default ChildComp