import {Action,Effect,Reducer,Subscription} from 'umi'

export interface ICurrentState {
  nickname: string
}

export interface CurrentModalInterface {
  namespace:string
  state:ICurrentState,
  reducers:{
    update:Reducer<ICurrentState>
  },
}


const CurrentModal:CurrentModalInterface = {
  namespace:'current',
  state:{nickname:''},
  reducers:{
    update(state,{nickname}){
      return {nickname}
    }
  },
  
}

export default CurrentModal