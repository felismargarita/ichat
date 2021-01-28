import React from 'react'
import omit from '@/assets/icons/omit.svg'
import Icon from '@/components/icon/Icon'
const Head = ()=>{


  return (
    <div className="right-bar-head">
      <span className="head-nickname">老板</span>
      <Icon className="head-icon" icon={omit}/>
    </div>
  )
}

export default Head