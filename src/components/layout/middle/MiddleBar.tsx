import Search from '@/components/input/Search'
import FriendEntry from './FriendEntry'
import {getAvatar} from '@/data/avatars'
import {IMessageState} from '@/models/messages' 
import {useDispatch,useSelector} from 'umi'

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
  return (
    <div className="my-middle-bar">
      <Search className="middle-bar-search"/>
      <div className="friend-entry-list">
        {
          messages.map((msg,index)=>(
            <FriendEntry
            key={index}
            className="firend-entry"
            imgSrc={getAvatar(msg.nickname)}
            nickname={msg.nickname}
            recentMsg={getRecentMsg(msg.msgList)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MiddleBar