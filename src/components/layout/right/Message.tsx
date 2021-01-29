import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import classnames from 'classnames'
interface MessageProps {
  avatarYou:string
  avatarMe:string
  content:string
  isMe?:boolean
  onAvatarClick?:(e:React.MouseEvent,isMe:boolean)=>void
}

const Message:React.FC<MessageProps> = ({isMe,content,avatarYou,avatarMe,onAvatarClick})=>{
  const classes = classnames({'message-me':isMe,'message':!isMe})
  const contentClasses = classnames('message-content',{'message-content-me':isMe})




  return (
    <div className={classes}>
      <Avatar 
      className="message-avatar" 
      src={isMe ? avatarMe : avatarYou} 
      onClick={(e)=>{
        onAvatarClick?.(e,!!isMe)
      }}/>
      <div className={contentClasses}>{content}</div>
    </div>
  )
}

export default Message