import React, { useEffect, useState } from 'react'
import {throttle} from 'lodash'
interface IPosition  {x:number,y:number}

export default ()=>{
  
  const [position,setPosition] = useState<IPosition>()

  const throttleSetter =  throttle(setPosition,300)
  useEffect(()=>{
    document.addEventListener('mousemove',e=>{
      throttleSetter({x:e.clientX,y:e.clientY})
    })
    return ()=>document.addEventListener('mousemove',()=>false)
  },[])

  return position

}