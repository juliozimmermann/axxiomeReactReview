import React, { createContext } from 'react';

import { Provider } from 'react-redux';

import store from './data/store';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';

import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import CounterState from './pages/CounterState';
import ReducerState from './pages/ReducerState';
import CustomRedux from './pages/CustomRedux';

import NotFound from './pages/NotFound';

import { GlobalStyle } from './components/ui/Button';

import Posts from './pages/Posts';

import './App.css';

import BackgroundColorContext from './contexts/BackgroundColorContext';

function App() { 

  const color = 'blue';

  return <>      
      <Provider store={store}>
        <BackgroundColorContext.Provider value={{ backgroundColor: color }}>
          <GlobalStyle />
          <Header title="Axxiome App" />     
          <HashRouter>
            <Menu />
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/projects" component={Projects} />
              <Route path="/stateCounter" component={CounterState} />
              <Route path="/reducerCounter" component={ReducerState} />
              <Route path="/posts" component={Posts} />
              <Route path="/customRedux" component={CustomRedux} />
              <Route path="/" component={NotFound} />
            </Switch>
          </HashRouter>
        </BackgroundColorContext.Provider> 
      </Provider>
    </>;
}

export default App;
