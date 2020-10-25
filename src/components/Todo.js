import React from 'react'

export default function ToDo(props) {
    const { task, id, completed, toDoClick } = props;

    return(
        <>
            {completed ? <div id={id} onClick={toDoClick}><del>{task}</del></div> : <div id={id} onClick={toDoClick}>{task}</div>}        
        </>
    )
}