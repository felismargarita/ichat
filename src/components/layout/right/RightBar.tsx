import Head from './Head'
import MessageBox from './MessageBox'
import InputBox from './InputBox'
import menu from '@/models/menu'
import {IMenuState} from '@/models/menu'
import current from '@/models/current'
import {useSelector} from 'umi'
import FriendDetail from './FriendDetail'
const RightBar = ()=>{
  const {menu} = useSelector((state:{menu:IMenuState})=>state.menu)

  if(current === null){
    return null
  }
  if(menu==='message'){
    return (
      <div>
        <Head/>
        <MessageBox/>
        <InputBox/>
      </div>
    )
  }
  if(menu === 'friend'){
    return <FriendDetail/>
  }

  return null
}

export default RightBar