import React from 'react'
import classnames from 'classnames'
interface IAvatar {
  src:string
  className?:string
  onClick?:(e:React.MouseEvent)=>void
}

const Avatar:React.FC<IAvatar> = ({src,className,onClick})=>{


  const classes = classnames('avatar-container',className)

  return (
    <div className={classes} onClick={(e)=>onClick?.(e)}>
      <img src={src} className="avatar-img"/>
    </div>
  )
}

export default Avatar