import React,{useState} from 'react'
import Button from '@/components/button/Button'
import InputToolBar from './InputToolBar'
import {useDispatch,useSelector} from 'umi'
import {ICurrentState} from '@/models/current' 
import {IMessageState} from '@/models/messages' 

const InputBox = ()=>{
  const current = useSelector((state:{current:ICurrentState})=>state.current)
  const messages = useSelector((state:{messages:Array<IMessageState>})=>state.messages)
  const dispatch = useDispatch()
  const message = messages.find(f=>f.nickname === current.nickname)
  const [text,setText] = useState('')

  const send = ()=>{
    if(!text){
      return
    }
    if(message){
      dispatch({
        type:'messages/update',
        nickname:current.nickname,
        msgList:[...message.msgList,{
          isMe:true,
          content:text
        }]
      })
      setText('')
    }
  }
  return (
    <div className="input-box">
      <InputToolBar/>
      <textarea className="input-box-input" value={text} onInput={e=>setText(e.currentTarget.value)}/>
      <Button className="btn-send" onClick={send}>发送</Button>
    </div>
    
  )
}

export default InputBox