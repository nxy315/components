import React, { Component } from 'react';
import { Table } from 'antd';
import route from './route';
import './App.css';

import Menu from './components/menu' //菜单

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: []
    }
  }



  render() {

    return (
      <div className="container">
        <Menu/>
        <div className="route-pages">
          {route}
        </div>
      </div>
    );
  }
}

export default App;
