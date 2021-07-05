import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {

    //Deconstruct props to pull in handlers
    const { listData, toDoToggle } = props;

    return(
        <>
            {listData.map(item => <Todo key={item.id} task={item.task} id={item.id} completed={item.completed} toDoToggle={toDoToggle}/>)}            
        </>
    )
}