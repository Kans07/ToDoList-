import React from "react";
import { useState,useEffect } from "react";

function Todo(props){
    var data = {}
    data = JSON.stringify(props.taskdata.title)
    const [todoData,setTodoData] = useState(data)
   return (
    <>
        <li>{todoData}</li>
        <button type="button" className="btn btn-success" onClick={()=>{setTodoData(data)}}>Click Me</button>
        
    </>
    )
    //return <li>{JSON.stringify(props.taskdata)}</li>
}

function List(){
   
    //const cars = ['Ferrari','Mercedes','McLaren'];
    const [task,setTask] = useState({
        "userId": 1,
        "id": 0,
        "title": "Task yet to be added",
        "completed": false
      })
    var id= Math.round((Math.random())*10,1);
    if(id===0){
        id=1;
    }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then((json) => {
            setTask(json)})
    },[id])
     // const taskdata = {task}
    // const len = Object.keys(task).length;
    //<button type="button" className="btn btn-success" onClick={()=>{setTask("Data Submitted")}}>Click Me</button>
    return(
        <>
            <Todo taskdata={task} />
        </>
    )
}

export default List;