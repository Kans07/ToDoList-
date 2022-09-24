import React from "react";
import InputList from '../components/InputList'
//import Search from '../components/Search'

//import {NavLink} from 'react-router-dom'


const Home = ()=>{
    return(
        <>
        {/* <h1 className='TitleHeading'>ToDo List</h1> */}
            {/* <div
             style={{
                display: "flex",
                background: 'black',
                padding: '5px 0 5px 5px',
                fontSize: '20px'
            }}>
                <div style={{margin:'10px'}}>
                    <NavLink to="./Home" index style={({isActive})=>({color: isActive ? 'white':'darkcyan'})}>Home</NavLink>
                </div>
                <div style={{margin:'10px'}}>
                    <NavLink to="../about" style={({isActive})=>({color: isActive ? 'white':'darkcyan'})}>About</NavLink>
                </div>
            </div>  */}
            {/* <h1 className='TitleHeading'>ToDo List</h1> */}
            <div className="Home">
                <InputList />
            </div>
            
        </>
    )
}

export default Home;