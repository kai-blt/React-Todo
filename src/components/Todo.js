import React from 'react'

export default function ToDo(props) {
    const { task, id, completed, toDoToggle } = props;

    const handleClick = e => {
        e.preventDefault()
        toDoToggle(id);
    }
    return(
        <>
            {completed ? <div id={id} onClick={handleClick}><del>{task}</del></div> : <div id={id} onClick={handleClick}>{task}</div>}        
        </>
    )
}