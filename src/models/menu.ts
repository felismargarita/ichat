import {Action,Effect,Reducer,Subscription} from 'umi'

export interface IMenuState {
  menu: 'message'|'user'
}

export interface MenuModalInterface {
  namespace:string
  state:IMenuState,
  reducers:{
    update:Reducer<IMenuState>
  },
}


const MenuModal:MenuModalInterface = {
  namespace:'menu',
  state:{menu:'message'},
  reducers:{
    update(state,{menu}){
      return {menu}
    }
  },
  
}

export default MenuModal