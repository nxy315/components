import React, { Component } from 'react';
import { Table } from 'antd';
import './App.css';

import SearchBox from './components/searchBox' //搜索框组件
import Menu from './components/menu' //菜单
import { GetData, GetSelect } from './request/normal'
import { GetMenu } from './request/user'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: []
    }
  }

  async componentDidMount() {
    let select = await GetSelect();
    this.setState({ select: select.data.list });
  }

  async search(params) {
    let data = await GetData(params);
    console.log(data)
  }

  render() {
    const { select } = this.state;
    console.log(select)

    return (
      <div className="App">
        {/*<SearchBox*/}
          {/*name*/}
          {/*nameText="姓名"*/}
          {/*rangeDate*/}
          {/*dateText="选择日期"*/}
          {/*select={ select }*/}
          {/*selectText="请选择坐席数"*/}
          {/*onSearch={ this.search.bind(this) }*/}
          {/*reset*/}
        {/*/>*/}
        <Menu />
      </div>
    );
  }
}

export default App;
