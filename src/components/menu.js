import React from 'react';
import { withRouter } from 'react-router-dom';
import { GetMenu } from '../request/user';

@withRouter
class Menu extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      menuData: []
    }
  }

  async componentWillMount() {
    let data = await GetMenu();
    this.setState({
      menuData: data.data
    })
  }

  /**
   * 跳转页面
   */
  toPage(route) {
    this.props.history.push(route);
  }

  render() {
    const { menuData } = this.state;

    return (
      <div className="menu-wrap">
        {
          menuData && menuData.map((menu, index) => {
            return <div key={index} className="menu-block">
              <div className="menu-block-title">{ menu.name }</div>
              <div className="menu-items-wrap">
                {
                  menu.list && menu.list.map((item, i) => {
                    return <div key={i} className="menu-item" onClick={ this.toPage.bind(this, item.route) }>{ item.name }</div>
                  })
                }
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

export default Menu