import React from 'react'
import classnames from 'classnames'
interface ButtonProps {
  className?: string
  onClick?:()=>void
}

const Button:React.FC<ButtonProps> = ({children,className,onClick})=>{

  const classes = classnames('button',className)
  return (
    <button className={classes} onClick={()=>onClick?.()}>
      {children}
    </button>
  )
}

export default Button