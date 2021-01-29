import React,{useState} from 'react'
import Icon from '@/components/icon/Icon'
import message from '@/assets/icons/message.svg'
import messageSelected from '@/assets/icons/messageSelected.svg'
import user from '@/assets/icons/user.svg'
import userSelected from '@/assets/icons/userSelected.svg'
import {useSelector,useDispatch} from 'umi'
import {IMenuState} from '@/models/menu'

export default ()=>{
  const {menu} = useSelector((state:{menu:IMenuState})=>state.menu)
  const dispatch = useDispatch()
  return (
    <div className="side-tool-bar">
      <Icon 
        className="side-bar-icon" 
        icon={message} 
        iconSelected={messageSelected} 
        selected={menu ==='message'}
        onClick={()=>dispatch({type:'menu/update',menu:'message'})}
        />
      <Icon 
        className="side-bar-icon" 
        icon={user} 
        iconSelected={userSelected} 
        selected={menu ==='user'}
        onClick={()=>dispatch({type:'menu/update',menu:'user'})}
        />
    </div>
  )
}