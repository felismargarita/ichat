import React from 'react'
import classnames from 'classnames'
interface IconProps {
  icon:string
  iconSelected:string
  selected:boolean
  className?:string
  onClick ?:()=>void
}

const Icon:React.FC<IconProps> = ({selected,icon,iconSelected,className,onClick})=>{

  const classes = classnames('base-icon',className)
  return (
    selected 
    ?
    <img src={iconSelected} onClick={()=>onClick?.()} className={classes}/>
    :
    <img src={icon}  onClick={()=>onClick?.()} className={classes}/>

  )
}

export default Icon