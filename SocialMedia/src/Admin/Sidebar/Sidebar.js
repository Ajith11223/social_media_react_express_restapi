import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../img/logo.png'
import { SidebarData}  from '../../data/Data.js'
import {UilSignOutAlt,UilBars} from '@iconscout/react-unicons'
import {motion} from 'framer-motion'


const Sidebar = () => {

    const [selected,setSelected] = useState(0)
    const [expended,setExpended] = useState(true)

  const  sidebarVariants ={
    true:{
        left:"0"
    },
    false:{
        left:"-60%"
    }
  }

  return (
    <>
   
    <div className='bars' style={expended ? {left:"44%"} : {left:"5%"}}
    onClick={()=> setExpended(!expended)}
    >
        <UilBars/>
    </div>
   <motion.div className="Sidebar"
   variants={sidebarVariants}
   animate={window.innerWidth <= 768? `${expended}`:''}
   >
    <div className="logo">
        <img src={logo} alt="" />
        <span>Co<span>nn</span>ect</span>
       
    </div>

    {/* menu side */}
    <div className="menu">
       {SidebarData.map((item,index)=>{
        return(
            <div className={selected === index?'menuItem active':  "menuItem"}
            onClick={()=>setSelected(index)}
            key={index}>
                <div>
                <item.icon/>

                </div>
                <span >
                    {item.heading}
                </span>
            </div>
            
        )
       })}
       <div className="menuItem">
        <UilSignOutAlt/>
       </div>
        
    
    </div>
   </motion.div>
   </>
  )
}

export default Sidebar