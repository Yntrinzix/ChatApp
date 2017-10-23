import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/01_Home';
import Post from './components/02_Post';
import Header from './components/03_Header';
import Login from './components/04_Login';
import Chat from './components/05_Chat';




class App extends Component {
  constructor(){
    super();
    this.state = {
      timestamp: 'no timestamp yet',
      Name: "default",
    }

  }

  getName = d => console.log(d)



  render() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Login} />
            <Route path='/post' component={Post} />
            <Route path='/home' component={Home} />
            <Route path='/chat' component={Chat} />
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
