import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Header from './commom/header';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import store from './store'
class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <GlobalStyleIconFont/>
                <Provider store={store}>
                    <Header />
                </Provider>
            </div>
            
        )
    }
}

export default App;
