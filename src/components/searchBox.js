import React from 'react';
import {
  Button,
  DatePicker,
  Select,
  Input,
  message
} from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Search = Input.Search;
const Option = Select.Option;

const initParams = {
  name: '',
  startDate: '',
  endDate: '',
  date: '',
  selectId: '',
};

class SearchBox extends React.Component{
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.reset();
  }

  /*
   * 文本框输入
   */
  async handleInput(e, key) {
    let value = e.target.value;
    this.setState({
      [key]: value
    })
  }

  /*
   * 选择日期
   */
  chooseDate(date, dateString) {
    if(typeof dateString === 'string') {
      this.setState({
        date: dateString,
      })
    } else {
      this.setState({
        startDate: dateString[0],
        endDate: dateString[1],
      })
    }
  }

  /*
   * 搜索
   */
  search() {
    const { onSearch } = this.props;
    if(!onSearch) return message.error('未设置方法');
    this.props.onSearch(this.state)
  }

  /*
   * 重置
   */
  reset() {
    let params = JSON.parse(JSON.stringify(initParams));
    this.setState(params)
  }

  render() {
    const {
      name, nameText,
      rangeDate, dateText,
      select, selectText,
      onSearch, reset
    } = this.props;

    return (
      <div>
        {
          /* 输入框 */
          !name ? null : (
            <Input
              style={{width: 200}}
              placeholder={ nameText }
              onChange={ e => this.handleInput(e, 'name') }
            />
          )
        }

        {
          /* 区间日期选择 */
          !rangeDate ? null : (
            <RangePicker
              onChange={ this.chooseDate.bind(this) }
            >
            </RangePicker>
          )
        }

        {
          /* 普通日期选择 */
          !dateText ? null : (
            <DatePicker
              placeholder={ dateText }
              onChange={ this.chooseDate.bind(this) }
            >
            </DatePicker>
          )
        }

        {
          /* 下拉框 */
          !select ? null : (
            <Select
              style={{width: 200}}
              placeholder={ selectText }
            >
              {
                select.length <= 0 ? null : select.map((item, i) => {
                  return <Option value={ item.value } key={ i }>{ item.label }</Option>
                })
              }
            </Select>
          )
        }

        {
          /* 搜索按钮 */
          !onSearch ? null : <Button type="primary" onClick={ this.search.bind(this) }>搜索</Button>
        }

        {
          /* 重置按钮 */
          !reset ? null : <Button type="primary" onClick={ this.reset.bind(this) }>重置</Button>
        }
      </div>
    )
  }
}

export default SearchBox;