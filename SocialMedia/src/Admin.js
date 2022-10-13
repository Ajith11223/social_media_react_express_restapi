import React from 'react'
import './Admin.css'
import MainDash from './Admin/MainDash/MainDash'
import RightSide from './Admin/RightSide/RightSide'
import Sidebar from './Admin/Sidebar/Sidebar'




export  const Admin = () => {


  return (
  <div className='admin'>
<div className="AppGlass">

<Sidebar/>
 <MainDash/>
  <RightSide/>

  

</div>
  </div>
  )
}

