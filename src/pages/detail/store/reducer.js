import { fromJS } from 'immutable'
import * as constants from './constants'

// immutable库是facebook团队开发的,生成immutable对象
// immutable  不可改变的

const defaultState=fromJS({
    title:"",
    content:''
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.merge({
                title:action.title,
                content:action.content
            })
        default:
            return state;
    }
}