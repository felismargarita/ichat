import React from 'react'
import omit from '@/assets/icons/omit.svg'
import Icon from '@/components/icon/Icon'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current' 

const Head = ()=>{

  const current = useSelector((state:{current:ICurrentState})=>state.current)

  return (
    <div className="right-bar-head">
      <span className="head-nickname">{current ? current.nickname :''}</span>
      <Icon className="head-icon" icon={omit}/>
    </div>
  )
}

export default Head