import styled from "styled-components";
import logoPic from '../../statics/logo.png';

//创建一个HeaderWrapper组件，本质上就是一个div，带有一些样式
export const HeaderWrapper=styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;

//创建一个Logo组件，本质上就是一个a标签，带有一些样式
export const Logo=styled.a`
    position:absolute; 
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
//创建一个Nav组件，本质上就是一个div，带有一些样式
export const Nav=styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`;
//创建一个Nav组件，本质上就是一个div，带有一些样式
export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
//创建一个SearchWrapper组件，本质上就是一个div，带有一些样式
export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    .iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:15px;
    }
`
//创建一个NavSearch组件，本质上就是一个input，带有一些样式
export const NavSearch=styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:38px;
    padding:0px 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    &::placeholder{
        color:#999;
    }
`;
//创建一个Addition组件，本质上就是一个div，带有一些样式
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
//创建一个Button组件，本质上就是一个div，带有一些样式
export const Button=styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;
