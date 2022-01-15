import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import { GlobalStyle } from './style';
import { GlobalStyleIconFont } from './statics/iconfont/iconfont';
import Login from './pages/login'
import Write from './pages/write'
import store from './store'
class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <GlobalStyleIconFont/>
                
                {/* <meta name="referrer" content="no-referrer" /> */}
                <Provider store={store}>
                        <BrowserRouter>
                            <div>
                                <Header />
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/login' exact component={Login}></Route>
                                <Route path='/write' exact component={Write}></Route>
                                <Route path='/detail/:id' exact component={Detail}></Route>
                            </div>
                        </BrowserRouter>
                </Provider>
            </div>
            
        )
    }
}

export default App;
