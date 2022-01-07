import React, { Component } from 'react'
import Header from './commom/header';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <GlobalStyleIconFont/>
                <Header />
            </div>
        )
    }
}

export default App;
