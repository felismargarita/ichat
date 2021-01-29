import React from 'react'
import FriendEntry from '@/components/layout/middle/FriendEntry'
import pinyin from 'pinyin'
import _ from 'lodash'
import {getAvatar} from '@/data/avatars'
//根据字母进行排序,如果是中文获取拼音首字母
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

interface IFriend {
  nickname:string
  avatar:string
}

interface AlphabetListProps {
  friends:Array<IFriend>
}

const getFriendList = (alpha:string,friends:Array<IFriend>)=>{
  return friends.filter(friend=>{
    const {nickname} = friend
    const spell = pinyin(nickname.substr(0,1),{style:pinyin.STYLE_NORMAL})
    return _.flattenDeep(spell)[0][0].toUpperCase() === alpha.toUpperCase()
  })
}

const AlphabetList:React.FC<AlphabetListProps> = ({friends})=>{

  return (
    <div className="alpha-list">
      {
        alphabet.map(alpha=>{
          const list = getFriendList(alpha,friends)
          if(list.length){
            return <div key={alpha}>
            <div className="alpha-list-single" >{alpha}</div>
            {
              list.map((f,i)=>(
                <FriendEntry
                  key={f.nickname}
                  className="firend-entry"
                  imgSrc={getAvatar(f.nickname)}
                  nickname={f.nickname}
                  recentMsg=""
                />
              ))
            }
          </div>
          }else{
            return null
          }
        })
      }
    </div>
  )
} 

export default AlphabetList