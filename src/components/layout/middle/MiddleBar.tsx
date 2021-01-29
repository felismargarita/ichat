import Search from '@/components/input/Search'
import FriendEntry from './FriendEntry'
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

  return (
    <div className="my-middle-bar">
      <Search className="middle-bar-search"/>
      <div className="friend-entry-list">
        {
          friends.map((friend,index)=>(
            <FriendEntry
            key={index}
            className="firend-entry"
            imgSrc={friend.img}
            nickname={friend.nickname}
            recentMsg={getRecentMsg(friend.msgList)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MiddleBar