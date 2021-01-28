import React from 'react'
import classnames from 'classnames'
interface ButtonProps {
  className?: string
}

const Button:React.FC<ButtonProps> = ({children,className})=>{

  const classes = classnames('button',className)
  return (
    <button className={classes}>
      {children}
    </button>
  )
}

export default Button