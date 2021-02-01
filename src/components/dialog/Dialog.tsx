import React, { useEffect } from 'react'
import {CloseOutlined} from '@ant-design/icons'
import useMouseZoom from '@/hooks/useMouseZoom'
interface DialogProps {
  visible:boolean
  onClose:()=>void
}

const Dialog:React.FC<DialogProps> = ({visible,children,onClose})=>{

  const [zoom,startZoom,releaseZoom] = useMouseZoom(5,[50,150])

  useEffect(()=>{
    if(visible){
      startZoom()
    }else{
      releaseZoom()
    }
    return releaseZoom
  },[visible])
  if(!visible){
    return null
  }
  const width = 150*(1+zoom/100)
  return (
    <div className="dialog-container" style={{width,height:width}}>
      <CloseOutlined className="dialog-container-close" onClick={onClose} />
      {
        React.cloneElement(children as React.ReactElement,{style:{width:'100%',height:'100%'}})
      }
      </div>
  )
}

export default Dialog