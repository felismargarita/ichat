import React, { useEffect, useRef, useState } from 'react'

export default (step?:number,range?:[number,number])=>{
  const [zoom,setZoom] = useState(100)
  const r = range ? range : [1,100]
  const  s = step ? step : 1
  const start = ()=>{
    setZoom(100)
    window.addEventListener('wheel',e=>{
      const {deltaY} = e
      if(deltaY<0){
        setZoom(zoom=>{
          const current = zoom + s
          if(current<r[0]){
           return r[0]
          }else{
            return current
          }
        })
      }else{
        setZoom(zoom=>{
          const current = zoom - s
          if(current>r[1]){
           return r[1]
          }else{
            return current
          }
        })
      }
    })
  }
  const release = ()=>window.addEventListener('wheel',()=>false)
  
  let zoomValue = zoom
  if(zoom<=r[0]){
    zoomValue = r[0]
  }
  if(zoom>=r[1]){
    zoomValue = r[1]
  }

  return [zoomValue,start,release] as [number,()=>void,()=>void]
}