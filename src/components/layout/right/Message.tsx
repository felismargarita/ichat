import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import avatar1 from '@/assets/avatars/avatar1.jpg'
import classnames from 'classnames'
interface MessageProps {
  content:string
  isMe?:boolean
}

const Message:React.FC<MessageProps> = ({isMe,content})=>{

  const classes = classnames({'message-me':isMe,'message':!isMe})
  const contentClasses = classnames('message-content',{'message-content-me':isMe})
  return (
    <div className={classes}>
      <Avatar src={avatar1} className="message-avatar"/>
      <div className={contentClasses}>{content}</div>
    </div>
  )
}

export default Message