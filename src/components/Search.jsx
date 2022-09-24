import React from "react";
import { useContext } from "react";
import UserContext from '../components/InputList'

const Search = ({listData})=>{
    debugger;
    //const [userData,setUserData] = useContext(UserContext)
    //console.log(userData)
    //var useData = [];

    const handleData = (e)=>{
        debugger;
        var userData = [];
        console.log(listData)
        document.getElementById('taskList').innerHTML = ''
        // var context = [];
        // context = userData;
        //var userData = [];
        var task = [];
        //var val = (task)=>task===e.target.value;
        var taskdata = e.target.value;
        userData = [...listData]
        // console.log(userData)
        // console.log(taskdata)
        // for (let i = 0; i < userData.length; i++) {
        //     console.log(userData[i])
        //     if(taskdata===userData[i])
        //         {task = userData[i];}
            
        // }
        let val = new RegExp(`${taskdata}`,"ig")
        console.log(val)
        console.log(userData.filter((item)=>item===taskdata))
        userData.forEach((item)=>(item.match(val)) ? task.push(item) : task.push()/*console.log("match not found")*/)
        console.log(task)
        //task =userData.filter((item)=>item===taskdata)
        //console.log(task)
        //var tasks = (task)=>'<li>'+task+'</li>'
        task.forEach((item,id)=>document.getElementById('taskList').innerHTML += '<li class="Tasklist" id='+id+'>'+item+'</li>')
    }
    return(
        <>
            <div className='searchDiv'>
                <label className='searchLabel'>Search: </label>
                <input className='search' placeholder="Search task..." onKeyUp={handleData} /*value={(e)=>e.target.value}*/ type='text'/>
                <br/>
                <br/>
            </div>
        </>
    )
}

export default Search;