import {Action,Effect,Reducer,Subscription} from 'umi'
import friends from '@/data/friends'
import randomMessage from '@/data/randomMessage'
export interface IMessageState {
  nickname:string
  msgList:Array<any>
  hidden?:boolean
}

export interface MessageModalInterface {
  namespace:string
  state:Array<IMessageState>,
  reducers:{
    update:Reducer<Array<IMessageState>>
    init:Reducer<Array<IMessageState>>
    top:Reducer<Array<IMessageState>>
    show:Reducer<Array<IMessageState>>
    hidden:Reducer<Array<IMessageState>>
  },
  subscriptions: { setup: Subscription }
}


const MessageModal:MessageModalInterface = {
  namespace:'messages',
  state:[],
  reducers:{
    update(state,{nickname,msgList}){
      const others = (state || []).filter(msg=>msg.nickname !== nickname)
      return [
        {
          nickname,
          msgList:[...msgList,{isMe:false,content:randomMessage()}]
        },
        ...others]
    },
    show(state,{nickname}){
      return (state || []).map(f=>{
        return f.nickname === nickname ? ({...f,hidden:false}) : f
      })
    },
    hidden(state,{nickname}){
      return (state || []).map(f=>{
        return f.nickname === nickname ? ({...f,hidden:true}) : f
      })
    },
    top(state,{nickname}){
      const others = (state || []).filter(msg=>msg.nickname !== nickname)
      const current = (state || []).filter(msg=>msg.nickname === nickname)
      return [...current,...others]
    },
    init(state,{messages}){
      return messages
    }
  },
  subscriptions:{
    setup({ dispatch, history }){
      return history.listen(({pathname})=>{
        if(pathname === '/'){
          dispatch({
            type: 'init',
            messages:friends
          })
        }
      })
    }
  }
}

export default MessageModal