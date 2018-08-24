import React from 'react';
import {GetData, GetSelect} from "../request/normal";
import { Table } from 'antd';
import SearchBox from '../components/searchBox' //搜索框组件

class Finace extends React.Component{
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

    return (
      <div>
        <SearchBox
          name
          nameText="请输入订单号"
          onSearch={ this.search.bind(this) }
        />
        <Table/>
      </div>
    )
  }
}

export default Finace;