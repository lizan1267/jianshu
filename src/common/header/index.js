import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators }  from './store'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch,
     Addition, Button, SearchWrapper, SearchInfo,
     SearchInfoTitle, SearchInfoSwitch, SearchInfoList,
     SearchInfoItem } from './style'

class Header extends Component {

    //热门搜索
    getListArea(){
        const { focused,list }=this.props;
        if(focused){
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            list.map(item=>{
                                return (
                                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused,handleInputFocus,handleInputBlur }=this.props;
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
                        in={focused}
                        timeout={200}
                        classNames="slide" >
                            <NavSearch className={focused?"focused":""}
                            onFocus={handleInputFocus} 
                            onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused?"focused iconfont":"iconfont"}>&#xe687;</span>
                        {this.getListArea()}
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
}



 

const mapStateToProps = (state) => {
    return {
        focused:state.getIn(["header","focused"]),
        // 等价于   focused:state.get("header").get("focused")
        // 此时的state和state.header都是immutable对象
        list:state.getIn(["header","list"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
