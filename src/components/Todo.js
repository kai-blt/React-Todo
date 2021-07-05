import React from 'react'
import styled from 'styled-components'

const ToDoContainer = styled.div`
    padding: 2% 2%;
    font-size: 3rem;
    border: 1px solid #333;
    background-color: #222;    
    box-shadow: 10px 10px 40px #222;

    del {
        color: #333;
    }

    &:hover {
        color: #333;
        transition: .25s ease-in-out;
    }
`;

export default function ToDo(props) {
    const { task, id, completed, toDoToggle } = props;

    const handleClick = e => {
        e.preventDefault()
        toDoToggle(id);
    }
    return(
        <>
            {completed ? <ToDoContainer id={id} onClick={handleClick}><del>{task}</del></ToDoContainer> : <ToDoContainer id={id} onClick={handleClick}>{task}</ToDoContainer>}        
        </>
    )
}