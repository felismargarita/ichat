import React,{useState} from 'react'
import {getAvatar} from '@/data/avatars'
import {ICurrentState} from '@/models/current'
import {useSelector,useDispatch} from 'umi'
import Avatar from '@/components/avatar/Avatar'
import Button from '@/components/button/Button'
import Dialog from '@/components/dialog/Dialog'
import { set } from 'lodash'

const FriendDetail = ()=>{
  const dispatch = useDispatch()
  const current = useSelector((state:{current:ICurrentState})=>state.current)
  const [visible,setVisible] = useState(false)

  if(!current.nickname){
    return <div></div>
  }

  return (
    <div className="friend-detail">
      <Dialog visible={visible} onClose={()=>setVisible(false)}>
        <img src={getAvatar(current.nickname)}/>
      </Dialog>
      <div className="friend-detail-nickname">{current.nickname}</div>
      <div className="friend-detail-avatar">
        <Avatar src={getAvatar(current.nickname)} onClick={()=>setVisible(true)}/>
      </div>
      <hr/>
      <div className="friend-detail-text">备注<span className="friend-detail-info">暂无</span></div>
      <div className="friend-detail-text">说说<span className="friend-detail-info">他什么都没留下</span></div>
      <hr/>
      <Button className="send-button" onClick={()=>{
        dispatch({type:'menu/update',menu:'message'})
        dispatch({type:'messages/show',nickname:current.nickname})
        dispatch({type:'messages/top',nickname:current.nickname})
      }}>发消息</Button>
    </div>
  )
}

export default FriendDetail