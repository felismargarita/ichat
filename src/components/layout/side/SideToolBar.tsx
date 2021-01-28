import React,{useState} from 'react'
import Icon from '@/components/icon/Icon'
import message from '@/assets/icons/message.svg'
import messageSelected from '@/assets/icons/messageSelected.svg'
import user from '@/assets/icons/user.svg'
import userSelected from '@/assets/icons/userSelected.svg'

export default ()=>{
  const [currentSelected,setCurrent] = useState('message')

  return (
    <div className="side-tool-bar">
      <Icon 
        className="side-bar-icon" 
        icon={message} 
        iconSelected={messageSelected} 
        selected={currentSelected ==='message'}
        onClick={()=>setCurrent('message')}
        />
      <Icon 
        className="side-bar-icon" 
        icon={user} 
        iconSelected={userSelected} 
        selected={currentSelected === 'user'}
        onClick={()=>setCurrent('user')}
        />
    </div>
  )
}