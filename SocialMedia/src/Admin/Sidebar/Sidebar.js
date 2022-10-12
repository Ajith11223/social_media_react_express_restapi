import React from 'react'
import './Sidebar.css'
import logo from '../../img/logo.png'
import { SidebarData}  from '../../data/Data.js'
import {UilSignOutAlt} from '@iconscout/react-unicons'


const Sidebar = () => {
  return (
   <div className="Sidebar">
    <div className="logo">
        <img src={logo} alt="" />
        <span>Co<span>nn</span>ect</span>
       
    </div>

    {/* menu side */}
    <div className="menu">
       {SidebarData.map((item,index)=>{
        return(
            <div className="menuItem active">
                <item.icon/>
                <span>
                    {item.heading}
                </span>
            </div>
            
        )
       })}
       <div className="menuItem">
        <UilSignOutAlt/>
       </div>
        
    
    </div>
   </div>
  )
}

export default Sidebar