import React from 'react';
import { Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { GetMenu } from '../request/user';

@withRouter
class Menu extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      menuData: [],
      activeRouteParentId: null,
    }
  }

  async componentWillMount() {
    let path = this.props.history.location.pathname;
    let data = await GetMenu();
    this.setState({
      menuData: data.data
    }, () => {
      let menuData = JSON.parse(JSON.stringify(this.state.menuData));
      for(let i = 0; i < menuData.length; i++) {
        for(let j = 0; j < menuData[i].list.length; j++) {
          if(path === menuData[i].list[j].route) {
            menuData[i].active = true;
            return this.setState({
              menuData,
              activeRouteParentId: menuData[i].list[j].parent
            });
          }
        }
      }
    })
  }

  /**
   * 点击菜单跳转页面
   */
  toPage(route, parentId, index) {
    const path = this.props.history.location.pathname;
    if(path === route) return;
    let menuData = JSON.parse(JSON.stringify(this.state.menuData));
    for(let i = 0; i < menuData.length; i++) {
      menuData[i].active = false;
    }
    menuData[index].active = true;
    this.setState({
      menuData,
      activeRouteParentId: parentId
    });
    this.props.history.push(route);
  }

  /**
   * 菜单toggle
   */
  toggleMenu(index) {
    let menuData = JSON.parse(JSON.stringify(this.state.menuData));
    let active = menuData[index].active;
    for(let i = 0; i < menuData.length; i++) {
      menuData[i].active = false;
    }
    menuData[index].active = active ? false : true;
    this.setState({
      menuData
    })
  }

  render() {
    const { menuData, activeRouteParentId } = this.state;
    const route = this.props.history.location.pathname;

    return (
      <div className="menu-wrap">
        {
          menuData && menuData.map((menu, index) => {
            return <div
              key={index}
              className='menu-block'
            >
              <div
                className={ menu.active || activeRouteParentId === menu.id ? 'menu-block-title active' : 'menu-block-title' }
                onClick={ this.toggleMenu.bind(this, index) }
              >
                <div>
                  <img className="menu-icon" alt="" src={require('../assets/images/icon.png')}/>
                  { menu.name }
                </div>

                {
                  menu.active
                  ? <Icon className="menu-arrow" type="up" />
                  : <Icon className="menu-arrow" type="down" />
                }
              </div>
              <div
                className={ menu.active ? 'menu-items-wrap active' : 'menu-items-wrap' }
                style={{ height: menu.active ? `${menu.list.length * 40}px` : '0' }}
              >
                {
                  menu.list && menu.list.map((item, i) => {
                    return <div
                      key={i}
                      className={ route === item.route ? 'menu-item active' : 'menu-item' }
                      onClick={ this.toPage.bind(this, item.route, item.parent, index) }
                    >
                      { item.name }
                      <div className="menu-triangle" style={{ opacity: route === item.route ? 1 : 0 }}></div>
                    </div>
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