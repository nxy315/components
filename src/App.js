import React, { Component } from 'react';
import { Table } from 'antd';
import './App.css';

import SearchBox from './components/searchBox'

function GetData(params) {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: {
        list: [
          { name: '张三1' },
          { name: '张三2' },
          { name: '张三3' },
          { name: '张三4' },
          { name: '张三5' },
        ]
      }
    })
  })
}

function GetSelect() {
  return new Promise((resolve, reject) => {
    resolve({
      code: 0,
      data: {
        list: [
          { value: 1, label: '坐席1' },
          { value: 2, label: '坐席2' },
          { value: 3, label: '坐席3' },
        ]
      }
    })
  })
}

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
        <SearchBox
          name
          nameText="姓名"
          rangeDate
          dateText="选择日期"
          select={ select }
          selectText="请选择坐席数"
          onSearch={ this.search.bind(this) }
          reset
        />
      </div>
    );
  }
}

export default App;
