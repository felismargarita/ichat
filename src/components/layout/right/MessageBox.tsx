import React,{useEffect} from 'react'
import Message from './Message'
import scrollBottom from '@/utils/scrollBottom'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current' 
import {IMessageState} from '@/models/messages' 
import avatar1 from '@/assets/avatars/avatar1.jpg'
import {getAvatar} from '@/data/avatars'
const MessageBox = ()=>{
  const current = useSelector((state:{current:ICurrentState})=>state.current)
  const messages = useSelector((state:{messages:Array<IMessageState>})=>state.messages)
  useEffect(()=>{
    scrollBottom('message-box')
  },[current,messages])

  const message = messages.find(f=>f.nickname === current.nickname)



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
          />
        ))
        :
        null
      }
    </div>
  )
}

export default MessageBox