import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Link} from 'react-router-dom'

class Login extends Component {

  render() {
    return (
      <div className='login'>

        <div className="logo">
          <img src="../../images/144.png" />
        </div>

        <div className="manners">
          <Link to={`/mobile`}><div className="mobile">手机号登录</div></Link>
          <Link to=""><div className="register">注册</div></Link>
          <Link to=""><div className="trial">游客试用<span className="arrow">>>></span></div></Link>
        </div>

        <div className="others">
          <div className="title">
            <div className="left"></div>
            <div className="text">其他登录方式</div>
            <div className="right"></div>
          </div>
          <div className="content">
            <div><i className="wx"></i><a>微信</a></div>
            <div><i className="qq"></i><a>QQ</a></div>
            <div><i className="sn"></i><a>新浪微博</a></div>
            <Link to={`/email`}><div><i className="wy"></i><span>网易邮箱</span></div></Link>
          </div>
        </div>
      </div>
    )
  }
}

function map(state) {
  return {
  }
}

export default connect(map)(Login)
