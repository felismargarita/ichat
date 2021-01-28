import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import classnames from 'classnames'
interface FirendEntryProps {
  imgSrc:string
  nickname:string
  recentMsg?:string
  className?:string
}

const FirendEntry:React.FC<FirendEntryProps> = ({imgSrc,nickname,recentMsg,className}) => {

  const classes = classnames('friend-entry',className)

  return (
    <div className={classes}>
      <div className="friend-entry-item friend-entry-avatar">
        <Avatar src={imgSrc}/>
      </div>
      <div className="friend-entry-item friend-entry-text">
        <div className="friend-entry-nickname">{nickname}</div>
        <div className="friend-entry-message">{recentMsg}</div>
      </div>
    </div>
  )
}

export default FirendEntry