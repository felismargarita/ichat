import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import classnames from 'classnames'
interface MessageProps {
  avatarYou:string
  avatarMe:string
  content:string
  isMe?:boolean
}

const Message:React.FC<MessageProps> = ({isMe,content,avatarYou,avatarMe})=>{

  const classes = classnames({'message-me':isMe,'message':!isMe})
  const contentClasses = classnames('message-content',{'message-content-me':isMe})
  return (
    <div className={classes}>
      <Avatar src={isMe ? avatarMe : avatarYou} className="message-avatar"/>
      <div className={contentClasses}>{content}</div>
    </div>
  )
}

export default Message