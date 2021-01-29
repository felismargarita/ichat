import {Action,Effect,Reducer,Subscription} from 'umi'
import friends from '@/data/friends'
import randomMessage from '@/data/randomMessage'
export interface IMessageState {
  nickname:string
  msgList:Array<any>
}

export interface MessageModalInterface {
  namespace:string
  state:Array<IMessageState>,
  reducers:{
    update:Reducer<Array<IMessageState>>
    init:Reducer<Array<IMessageState>>
  },
  subscriptions: { setup: Subscription }
}


const MessageModal:MessageModalInterface = {
  namespace:'messages',
  state:[],
  reducers:{
    update(state,{nickname,msgList}){
      return (state || []).map(msg=>{
        if(msg.nickname === nickname){
          return {
            nickname,
            msgList:[...msgList,{isMe:false,content:randomMessage()}]
          }
        }else{
          return msg
        }
      })
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
            type: 'messages/init',
            messages:friends
          })
        }
      })
    }
  }
}

export default MessageModal