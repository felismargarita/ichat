import {Action,Effect,Reducer,Subscription} from 'umi'

export interface IMouseState {
  x: number
  y: number
}

export interface MouseModalInterface {
  namespace:string
  state:IMouseState,
  reducers:{
    update:Reducer<IMouseState>
  },
}


const MouseModal:MouseModalInterface = {
  namespace:'mouse',
  state:{x:0,y:0},
  reducers:{
    update(state,{x,y}){
      return {x,y}
    }
  },
  
}

export default MouseModal