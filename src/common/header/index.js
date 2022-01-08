import React from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,
     Addition, Button, SearchWrapper, SearchInfo,
     SearchInfoTitle, SearchInfoSwitch, SearchInfoList,
     SearchInfoItem } from './style'

const getListArea=(show)=>{
    if(show){
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>生活</SearchInfoItem>
                    <SearchInfoItem>历史</SearchInfoItem>
                    <SearchInfoItem>考研</SearchInfoItem>
                    <SearchInfoItem>React</SearchInfoItem>
                    <SearchInfoItem>css</SearchInfoItem>
                    <SearchInfoItem>疫情</SearchInfoItem>
                    <SearchInfoItem>工作</SearchInfoItem>
                    <SearchInfoItem>微信小程序</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    }else{
        return null;
    }
}

const Header = (props) => {
    return (  
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="left">IT技术</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                    in={props.focused}
                    timeout={200}
                    classNames="slide" >
                        <NavSearch className={props.focused?"focused":""}
                        onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                    <span className={props.focused?"focused iconfont":"iconfont"}>&#xe687;</span>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe600;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}
 

const mapStateToProps = (state) => {
    return {
        focused:state.getIn(["header","focused"])
        // 等价于   focused:state.get("header").get("focused")
        // 此时的state和state.header都是immutable对象
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
