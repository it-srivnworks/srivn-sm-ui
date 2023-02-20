import React from 'react'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  console.log("-MainPage");

  return (
    <>
    <div className="content-wrapper" style={{minHeight: 900}}>
       <Outlet>Tester</Outlet>
    </div>   
    </>
  )
}

export default MainPage