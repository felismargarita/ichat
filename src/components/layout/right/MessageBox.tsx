import React,{useEffect,useState,useRef} from 'react'
import Message from './Message'
import scrollBottom from '@/utils/scrollBottom'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current' 
import {IMessageState} from '@/models/messages' 
import avatar1 from '@/assets/avatars/avatar1.jpg'
import {getAvatar} from '@/data/avatars'
import {showCard} from '@/components/card/Card'
const MessageBox = ()=>{
  const current = useSelector((state:{current:ICurrentState})=>state.current)
  const messages = useSelector((state:{messages:Array<IMessageState>})=>state.messages)
  useEffect(()=>{
    scrollBottom('message-box')
  },[current,messages])

  const message = messages.find(f=>f.nickname === current.nickname)
  const ref = useRef<{mouseX:number,mouseY:number,destory:Function}>()

  useEffect(()=>{
    window.addEventListener('click',(e)=>{
      const {clientX,clientY} = e
      const openCardInfo = ref.current
      if(clientX === openCardInfo?.mouseX && clientY === openCardInfo.mouseY){
        return
      } 
      openCardInfo?.destory()
      ref.current = undefined
    })
  },[])

  return (
    <div className="message-box">
      {
        message
        ?
        message.msgList.map((msg,index)=>(
          <Message
          key={index}
          avatarYou={getAvatar(current.nickname)}
          avatarMe={avatar1}
          content={msg.content}
          isMe={msg.isMe}
          onAvatarClick={(e,isMe)=>{
              if(!isMe){
                const openCardInfo = ref.current
                if(openCardInfo){
                  return
                }
                const destory = showCard(current.nickname,getAvatar(current.nickname),{x:e.clientX,y:e.clientY})
                ref.current = {mouseX:e.clientX,mouseY:e.clientY,destory}
              }
          }}
          />
        ))
        :
        null
      }
    </div>
  )
}

export default MessageBox