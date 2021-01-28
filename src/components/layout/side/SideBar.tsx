import Avatar from '@/components/avatar/Avatar'
import avatar1 from '@/assets/avatars/avatar1.jpg'
import SideToolBar from './SideToolBar'

const SideBar = ()=>{


  return (
    <div className="my-side-bar">
      <Avatar src={avatar1} className="side-bar-avatar"/>
      <SideToolBar/>
    </div>
  )
}

export default SideBar