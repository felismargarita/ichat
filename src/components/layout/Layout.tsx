import React from 'react'

interface ILayout {
  sideBar:React.ReactNode
  middleBar:React.ReactNode
  rightBar:React.ReactNode
}

const Layout:React.FC<ILayout> = ({sideBar,middleBar,rightBar})=>{

  return <>
  
  <div className="layout-container">
    <div className="side-bar">
      {sideBar}
    </div>
    <div className="middle-bar">
      {middleBar}
    </div>
    <div className="right-bar">
      {rightBar}
    </div>
  </div>
  </>
}

export default Layout