import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import ReactDom from 'react-dom'
interface CardProps {
  nickname:string
  avatar:string
  posistion?:{x:number,y:number}
}

const Card:React.FC<CardProps> = ({nickname,avatar,posistion})=>{
  return (
  <div className="info-card-title" style={{position:'fixed',top:posistion?.y,left:posistion?.x}}>
    <div className="info-card-nickname">
      {nickname}
    </div>
    <Avatar className="info-card-avatar" src={avatar}/>
  </div>
  )
}

const destoryFunc = (ele:HTMLDivElement)=>{
  return ()=>ReactDom.unmountComponentAtNode(ele)
}

export const showCard = (nickname:string,avatar:string,posistion?:{x:number,y:number})=>{
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDom.render(<Card nickname={nickname} avatar={avatar} posistion={posistion}/>,div)
  return destoryFunc(div)
}

