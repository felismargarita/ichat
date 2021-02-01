import React,{useEffect} from 'react'
import { useDispatch } from 'umi'
import {throttle} from 'lodash'
interface ILayout {
  sideBar:React.ReactNode
  middleBar:React.ReactNode
  rightBar:React.ReactNode
}

const Layout:React.FC<ILayout> = ({sideBar,middleBar,rightBar})=>{

  useEffect(()=>{
    document.oncontextmenu = ()=>false
  },[])

  const dispatch = useDispatch()
  const throttleDispatch = throttle(dispatch,100)
  useEffect(()=>{
    document.addEventListener('mousemove',e=>{
      throttleDispatch({type:'mouse/update',x:e.clientX,y:e.clientY})
    })
    return ()=>document.addEventListener('mousemove',()=>false)
  },[])

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