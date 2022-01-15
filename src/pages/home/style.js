import styled from "styled-components";

export const HomeWrapper=styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`
export const HomeLeft=styled.div`
    float:left;
    width:625px;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`
export const HomeRight=styled.div`
    width:240px;
    float:right;
`
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`
export const TopicAnother=styled.div`
    
    float:left;
    height:32px;
    line-height:32px;
    font-size:13px;
    color:#555;
    margin-left:18px;
    cursor:pointer;
`
export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`
export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        color:#999;
        line-height:24px;
    }
`