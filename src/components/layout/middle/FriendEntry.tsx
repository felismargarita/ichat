import React from 'react'
import Avatar from '@/components/avatar/Avatar'
import classnames from 'classnames'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current'
interface FirendEntryProps {
  imgSrc:string
  nickname:string
  recentMsg?:string
  className?:string
  onContextMenu?:(nickname:string)=>void
}

const FirendEntry:React.FC<FirendEntryProps> = ({imgSrc,nickname,recentMsg,className,onContextMenu}) => {

  const dispatch = useDispatch()
  const current = useSelector((state:{current:ICurrentState})=>state.current)
  

  const classes = classnames('friend-entry',className,{
    'friend-entry-selected':current.nickname === nickname
  })

  return (

    <div className={classes} onContextMenu={()=>onContextMenu?.(nickname)} onClick={()=>dispatch({type:'current/update',nickname})}>
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