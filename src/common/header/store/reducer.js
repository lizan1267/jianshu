import * as constants from './constants'
import { fromJS } from 'immutable'

// immutable库是facebook团队开发的,生成immutable对象
// immutable  不可改变的

const defaultState=fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值返回一个全新的对象
            return state.set("focused",true);
        case constants.SEARCH_BLUR:
            return state.set("focused",false);
        case constants.CHANGE_LIST:
            return state.set("list",action.data);
        default:
            return state;
    }
}