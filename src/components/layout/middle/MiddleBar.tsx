import Search from '@/components/input/Search'
import FriendEntry from './FriendEntry'
import avatar2 from '@/assets/avatars/avatar2.jpg'


const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const MiddleBar = ()=>{


  return (
    <div className="my-middle-bar">
      <Search className="middle-bar-search"/>
      <div className="friend-entry-list">
        {
          list.map(num=>(
            <FriendEntry
            key={num}
            className="firend-entry"
            imgSrc={avatar2}
            nickname={'小沈'+num}
            recentMsg="你刚刚在做啥?刚在做啥刚在做啥刚在做啥"
            />
          ))
        }
      </div>
    </div>
  )
}

export default MiddleBar