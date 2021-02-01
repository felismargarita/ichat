import Search from '@/components/input/Search'
import FriendEntry from './FriendEntry'
import {getAvatar} from '@/data/avatars'
import {IMessageState} from '@/models/messages' 
import {useDispatch,useSelector} from 'umi'
import {IMenuState} from '@/models/menu'
import AlphaList from '@/components/alphaList/AlphaList'
import friends from '@/data/friends'
import {callContextMenu} from '@/components/contextMenu/ContextMenu'
import { useEffect, useState } from 'react'
import {IMouseState} from '@/models/mouse'
const getRecentMsg = (msgList:Array<any>)=>{
  const length = msgList.length
  if(length){
    return msgList[length-1].content
  }else{
    return ''
  }
}
const MiddleBar = ()=>{
  const messages = useSelector((state:{messages:Array<IMessageState>})=>state.messages)
  const {menu} = useSelector((state:{menu:IMenuState})=>state.menu)
  const [currentContext,setContext] = useState<{nickname:string,close:Function}>()
  const mouse = useSelector((state:{mouse:IMouseState})=>state.mouse)
  const dispatch = useDispatch()
  const openMenu = (nickname:string)=>{
    currentContext?.close()
    const close = callContextMenu([
      {key:'top',onClick:()=>dispatch({type:'messages/top',nickname}),name:'置顶'},
      {key:'hidden',onClick:()=>dispatch({type:'messages/hidden',nickname}),name:'不显示聊天'},
    ],mouse)
    setContext({nickname,close})
  }

  useEffect(()=>{
    document.addEventListener('click',()=>{
      if(currentContext?.close){
        currentContext?.close()
      }
    })
  },[currentContext])

  return (
    <div className="my-middle-bar">
      <Search className="middle-bar-search"/>
      <div className="friend-entry-list">
        {
          menu === 'message'
          ?
          messages.filter(f=>!f.hidden).map((msg,index)=>(
            <FriendEntry
            key={index}
            className="firend-entry"
            imgSrc={getAvatar(msg.nickname)}
            nickname={msg.nickname}
            recentMsg={getRecentMsg(msg.msgList)}
            onContextMenu={openMenu}
            />
          ))
          :
          <AlphaList friends={friends.map(f=>({nickname:f.nickname,avatar:getAvatar(f.nickname)}))}/>
        }
      </div>
    </div>
  )
}

export default MiddleBar