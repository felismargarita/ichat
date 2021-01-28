import React from 'react'
import Icon from '@/components/icon/Icon'
import file from '@/assets/icons/file.svg'
import simle from '@/assets/icons/smile.svg'
const InputToolBar = ()=>{

  return (
    <div className="input-tool-bar">
      <Icon className="input-bar-icon" icon={simle}/>
      <Icon className="input-bar-icon"icon={file}/>
    </div>
  )
}

export default InputToolBar