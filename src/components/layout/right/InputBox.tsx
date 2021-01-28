import React from 'react'
import Button from '@/components/button/Button'
import InputToolBar from './InputToolBar'
const InputBox = ()=>{


  return (
    <div className="input-box">
      <InputToolBar/>
      <textarea className="input-box-input"/>
      <Button className="btn-send">发送</Button>
    </div>
    
  )
}

export default InputBox