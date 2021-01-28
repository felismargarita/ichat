import React from 'react'
import classnames from 'classnames'
interface IAvatar {
  src:string
  className?:string
}

const Avatar:React.FC<IAvatar> = ({src,className})=>{


  const classes = classnames('avatar-container',className)

  return (
    <div className={classes}>
      <img src={src} className="avatar-img"/>
    </div>
  )
}

export default Avatar