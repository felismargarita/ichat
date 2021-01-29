import avatar2 from '@/assets/avatars/avatar2.jpg'
import avatar3 from '@/assets/avatars/avatar3.jpg'
import avatar4 from '@/assets/avatars/avatar4.jpg'
import avatar5 from '@/assets/avatars/avatar5.jpg'
import avatar6 from '@/assets/avatars/avatar6.jpg'
import avatar7 from '@/assets/avatars/avatar7.jpg'

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
  }
]

export const getAvatar = (nickname:string)=>{
  const avatar = avatars.find(a=>a.nickname === nickname)
  return avatar ? avatar.avatar : ''
}