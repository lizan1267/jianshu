import { fromJS } from 'immutable'

// immutable库是facebook团队开发的,生成immutable对象
// immutable  不可改变的

const defaultState=fromJS({
    topicList:[{
        id:1,
        title:"手绘",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:2,
        title:"社会热点",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:3,
        title:"简书电影",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:4,
        title:"读书",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:5,
        title:"摄影",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:6,
        title:"旅行·在路上",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:7,
        title:"历史",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        
        default:
            return state;
    }
}