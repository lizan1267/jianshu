import { fromJS } from 'immutable'
import * as constants from './constants'

// immutable库是facebook团队开发的,生成immutable对象
// immutable  不可改变的

const defaultState=fromJS({
    login:false
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set("login",action.value);
        case constants.CHANGE_LOGOUT:
            return state.set("login",action.value);
        default:
            return state;
    }
}