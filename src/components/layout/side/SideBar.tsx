import {useState} from 'react'
import Avatar from '@/components/avatar/Avatar'
import avatar1 from '@/assets/avatars/avatar1.jpg'
import SideToolBar from './SideToolBar'
import Dialog from '@/components/dialog/Dialog'
const SideBar = ()=>{

  const [visible,setVisible] = useState(false)

  return (
    <div className="my-side-bar">
      <Avatar src={avatar1} className="side-bar-avatar" onClick={()=>setVisible(true)}/>
      <Dialog visible={visible} onClose={()=>setVisible(false)}>
        <img src={avatar1}/>
      </Dialog>
      <SideToolBar/>
    </div>
  )
}

export default SideBar