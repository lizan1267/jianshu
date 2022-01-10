import * as constants from './constants'
import { fromJS } from 'immutable';
import axios from 'axios'

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
});
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
});
//这个不是导出给外边用的
const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data)
});
export const getList=()=>{
    return dispatch=>{
        axios.get('/api/headerList.json')
        .then(res=>{
            console.log(res);
            const data=res.data;
            console.log(res.data);
            console.log(data);
            console.log(data.data)
            dispatch(changeList(data.data));
        })
        .catch(()=>{
            console.log("error");
        })
    }
}