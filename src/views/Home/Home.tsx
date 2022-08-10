import React, { Component } from "react";
//使用组件直接在组件中进行使用即可
import { Button } from 'antd-mobile';
import './index.less'
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h3 className="center"> Home页面</h3>
          <p>欢迎来到首页</p>
          <Button color='primary'>按钮</Button>
        </div>
      </div>
    );
  }
}