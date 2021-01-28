import React from 'react'
import Message from './Message'
const MessageBox = ()=>{


  return (
    <div className="message-box">
      <Message content="消息消息消息消息1消息消息1消息消息11"/>
      <Message content="消息消息1"isMe={true}/>
      <Message content="消息消息1"/>
      <Message content="消息消息消息消息1消息消息11" isMe={true}/>
      <Message content="消息消息1"/>
      <Message content="消息消消息消息1息1" isMe={true}/>
      <Message content="测试测试"/>
      <Message content="测试测试测试测试测试测试测试测试" isMe={true}/>
      <Message content="测试测试测试测试测试测试测试测试"/>
      <Message content="消息消消息消息1息1" isMe={true}/>
    </div>
  )
}

export default MessageBox