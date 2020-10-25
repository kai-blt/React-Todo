import React from 'react'

export default function ToDoForm(props) {
    const { submit, updateText } = props;
    
    return(
        <form onSubmit={submit}>
            <input type="text" onChange={updateText}></input>
            <button>Add</button>
            <button>Clear</button>
        </form>
    )
}