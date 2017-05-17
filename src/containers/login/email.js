import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Login extends Component {

  render() {
    return (
      <div className='login'>
        <div className="header"  style={{backgroundColor:'#ce3d3e',color:'#fff',justifyContent:'space-between'}}>
          <div className="arrow-left" onClick={()=>this.props.history.goBack()}></div>
          <div>网易邮箱登录</div>
          <div></div>
        </div>

        <div className="email">
          <i></i><input ref="email" type="text" placeholder="登录邮箱" />
        </div>

        <div className="password">
          <i></i><input ref="password" type="password" placeholder="密码"  />
        </div>

        <div className="submit"><div>登录</div></div>
        <div className="reset"><div>重设密码</div></div>
      </div>

    )
  }
}

function map(state) {
  return {
  }
}

export default connect(map)(Login)
