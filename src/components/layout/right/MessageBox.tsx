import React,{useEffect} from 'react'
import Message from './Message'
import messages from '@/data/messages'
import scrollBottom from '@/utils/scrollBottom'
const MessageBox = ()=>{

  useEffect(()=>{
    scrollBottom('message-box')
  },[])

  return (
    <div className="message-box">
      {
        messages.map((message,index)=>(
          <Message
          key={index}
          avatar={message.avatar}
          content={message.content}
          isMe={message.isMe}
          />
        ))
      }
    </div>
  )
}

export default MessageBox