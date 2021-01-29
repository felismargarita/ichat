import Search from '@/components/input/Search'
import FriendEntry from './FriendEntry'
import {getAvatar} from '@/data/avatars'
import {IMessageState} from '@/models/messages' 
import {useDispatch,useSelector} from 'umi'
import {IMenuState} from '@/models/menu'
import AlphaList from '@/components/alphaList/AlphaList'
import friends from '@/data/friends'
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
  return (
    <div className="my-middle-bar">
      <Search className="middle-bar-search"/>
      <div className="friend-entry-list">
        {
          menu === 'message'
          ?
          messages.map((msg,index)=>(
            <FriendEntry
            key={index}
            className="firend-entry"
            imgSrc={getAvatar(msg.nickname)}
            nickname={msg.nickname}
            recentMsg={getRecentMsg(msg.msgList)}
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