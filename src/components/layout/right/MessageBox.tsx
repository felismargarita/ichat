import React,{useEffect} from 'react'
import Message from './Message'
import scrollBottom from '@/utils/scrollBottom'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current' 
import friends from '@/data/friends'
import avatar1 from '@/assets/avatars/avatar1.jpg'
const MessageBox = ()=>{

  const current = useSelector((state:{current:ICurrentState})=>state.current)

  useEffect(()=>{
    scrollBottom('message-box')
  },[current])

  const firend = friends.find(f=>f.nickname === current.nickname)

  return (
    <div className="message-box">
      {
        firend
        ?
        firend.msgList.map((message,index)=>(
          <Message
          key={index}
          avatarYou={firend.img}
          avatarMe={avatar1}
          content={message.content}
          isMe={message.isMe}
          />
        ))
        :
        null
      }
    </div>
  )
}

export default MessageBox