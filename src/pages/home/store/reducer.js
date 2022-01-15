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
    },],
    articleList:[{
        id:1,
        title:"分享一种工作中思维方式及实践",
        desc:"问题 一直以来，我们在工作中主要做的事情大部分都是让自己在专业度上提升，让自己在团队中变得更重要。这点是非常正确的，市面上都有“打造自己深深的护...",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:2,
        title:"分享一种工作中思维方式及实践",
        desc:"问题 一直以来，我们在工作中主要做的事情大部分都是让自己在专业度上提升，让自己在团队中变得更重要。这点是非常正确的，市面上都有“打造自己深深的护...",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    },{
        id:3,
        title:"分享一种工作中思维方式及实践",
        desc:"问题 一直以来，我们在工作中主要做的事情大部分都是让自己在专业度上提升，让自己在团队中变得更重要。这点是非常正确的，市面上都有“打造自己深深的护...",
        imgUrl:"//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
    }],
    recommendList:[{
        id:1,
        imgUrl:"./img/challenge.png",
    },{
        id:2,
        imgUrl:"./img/vip.png"
    },{
        id:3,
        imgUrl:"./img/lianzai.png"
    },{
        id:4,
        imgUrl:"./img/banquan.png"
    }]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        
        default:
            return state;
    }
}