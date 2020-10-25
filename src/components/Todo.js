import React from 'react'

export default function ToDo(props) {
    const { task, id, completed } = props;

    return(
        <div>{task}</div>
    )
}