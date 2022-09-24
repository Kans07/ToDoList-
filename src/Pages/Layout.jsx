import React from "react";
import {Outlet,NavLink} from 'react-router-dom'

const layout = ()=>{
    return(
        <>
            <div
                style={{
                display: "flex",
                background: 'cadetblue',
                padding: '5px 0 5px 5px',
                fontSize: '20px'
            }}>
                <div style={{margin:'10px'}}>
                   <NavLink to="./Home"  style={({isActive})=>({color: isActive ? 'white':'yellow'})}>Home</NavLink>
                </div>
                <div style={{margin:'10px'}}>
                   <NavLink to="../about" style={({isActive})=>({color: isActive ? 'white':'yellow'})}>About</NavLink>
                </div>
                <div style={{margin:'10px',textAlign:'center',marginLeft:'555px'}}>
                    <h2 className="TitleHeading">ToDo List</h2>
                </div>
            </div>
            <Outlet /> 
            
        </>

    )
}

export default layout;