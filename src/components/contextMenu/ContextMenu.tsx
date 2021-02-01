import React from 'react'
import ReactDom from 'react-dom'

interface IItem {
  key:React.Key
  name:string
  onClick:(key:React.Key)=>void
}

interface ContextMenuProps {
  items:Array<IItem>
  position:{x:number,y:number}
  onClose:()=>void
}

const ContextMenu:React.FC<ContextMenuProps> = ({items,position,onClose})=>{
  return (
    <div className="context-menu" style={{top:position.y,left:position.x+4}}>
    {
      items.map(item=>(
        <div 
        key={item.key} 
        className="context-menu-item" 
        onClick={()=>{
          item.onClick(item.name)
          onClose()
        }}>{item.name}</div>
      ))
    }
    </div>
  )
}

const close = (ele:HTMLDivElement)=>()=>ReactDom.unmountComponentAtNode(ele)

export const callContextMenu = (items:Array<IItem>,position:{x:number,y:number})=>{
  const divEle = document.createElement('div')
  document.body.appendChild(divEle)
  const closeFunc = close(divEle)
  ReactDom.render(<ContextMenu items={items} position={position} onClose={closeFunc}/>,divEle)
  return closeFunc
}