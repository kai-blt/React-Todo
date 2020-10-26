import React from 'react'

export default function ToDoForm(props) {
    const { submit, updateText, clearToDo } = props;
    
    return(
        <form onSubmit={submit}>
            <input type="text" onChange={updateText}></input>
            <button onClick={submit}>Add</button>
            <button onClick={clearToDo}>Clear</button>
        </form>
    )
}