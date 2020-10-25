import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    const { listData, toDoClick } = props;
    console.log(listData)

    return(
        <>
            {listData.map(item => <Todo key={item.id} task={item.task} id={item.id} completed={item.completed} toDoClick={toDoClick}/>)}            
        </>
    )
}