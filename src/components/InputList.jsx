import React, { createContext,useEffect,useState } from 'react';
import Search from '../components/Search'

//export const UserContext = createContext({});

function InputList(){
    var [list,setList] = useState([]);
    var task=[];
    const AddTask = ()=>{
        //debugger;
        document.getElementsByClassName('EmptyDiv')[0].innerHTML=''       
        task = document.getElementsByClassName('TaskAdd')[0].value
        if(task!==''){
            setList([...list,task])
        }
        document.getElementsByClassName('TaskAdd')[0].value = ''
        //UpdatedTask =list;
        //console.log(UpdatedTask)
    }
    useEffect(()=>{
        if(list.length===0){
            document.getElementsByClassName('EmptyDiv')[0].innerHTML  = 'No Tasks Added Yet'
        }
    },[list.length])
    let itemList = list.map((item,id)=>{
        return <li className='Tasklist' key={id}>{item}</li>})
    
    // const searchBar = (e) =>{ 
    //     debugger;
    //     var val =  e.target.value
    //     list.find(el=>el===val)
    //     document.getElementById('taskList').innerHTML = <li>{val}</li>
    // }

    return(
        //<UserContext.Provider value={list}>
        <>
            <Search listData = {list} />
            <div className='card'>
                <div className="card-body">
                    <form>
                        <input className='TaskAdd' /*onChange={(e)=>{AddTask(e.target.value)}}*/ placeholder='Add task here...' type="text"  />
                        &nbsp;&nbsp;
                        {/* <button type="button" className="btn btn-success TaskAddBtn" onKeyDown={event=> AddTaskEnter(event)} onClick={AddTask}  >Submit</button> */}
                        <button type="button" className="btn btn-success TaskAddBtn" /*onKeyDown={AddTask}*/ onClick={AddTask}  >Submit</button>
                        <div className='EmptyDiv'></div>
                        <ul id='taskList'>
                            {itemList}
                        </ul>
                    </form>
                </div>
            </div>
            </>
        //</UserContext.Provider>
  
    )
}

export default InputList;
