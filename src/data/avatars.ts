import avatar2 from '@/assets/avatars/avatar2.jpg'
import avatar3 from '@/assets/avatars/avatar3.jpg'
import avatar4 from '@/assets/avatars/avatar4.jpg'
import avatar5 from '@/assets/avatars/avatar5.jpg'
import avatar6 from '@/assets/avatars/avatar6.jpg'
import avatar7 from '@/assets/avatars/avatar7.jpg'

import avatar8 from '@/assets/avatars/avatar8.jpg'
import avatar9 from '@/assets/avatars/avatar9.jpg'
import avatar10 from '@/assets/avatars/avatar10.jpg'
import avatar11 from '@/assets/avatars/avatar11.jpg'
import avatar12 from '@/assets/avatars/avatar12.jpg'
import avatar13 from '@/assets/avatars/avatar13.jpg'
import avatar14 from '@/assets/avatars/avatar14.jpg'
import avatar15 from '@/assets/avatars/avatar15.jpg'





const avatars = [
  {
    nickname:'老婆',
    avatar:avatar2
  },
  {
    nickname:'老板',
    avatar:avatar3
  },
  {
    nickname:'同事-小鲨鱼',
    avatar:avatar4
  },
  {
    nickname:'同事-大明',
    avatar:avatar5
  },
  {
    nickname:'朋友-老党',
    avatar:avatar6
  },
  {
    nickname:'金牌销售',
    avatar:avatar7
  },
  {
    nickname:'小李',
    avatar:avatar8
  },
  {
    nickname:'安大明',
    avatar:avatar9
  },
  {
    nickname:'普普',
    avatar:avatar10
  },
  {
    nickname:'陈超',
    avatar:avatar11
  },
  {
    nickname:'方园',
    avatar:avatar12
  },
  {
    nickname:'符惠惠',
    avatar:avatar13
  },
  {
    nickname:'葛家伟',
    avatar:avatar14
  },
  {
    nickname:'何润东',
    avatar:avatar15
  }
]

export const getAvatar = (nickname:string)=>{
  const avatar = avatars.find(a=>a.nickname === nickname)
  return avatar ? avatar.avatar : ''
}