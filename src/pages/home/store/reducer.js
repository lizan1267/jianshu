import { fromJS } from 'immutable'
import * as constants from './constants'

// immutable库是facebook团队开发的,生成immutable对象
// immutable  不可改变的

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList)
            })
        default:
            return state;
    }
}