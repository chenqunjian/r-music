import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginAction } from '../../actions/login'

class Login extends Component {
  constructor(props){
    super(props)
  }

  async login(){
    const { dispatch,login } = this.props;
    let type = 'cellphone';
    let params = {
      phone: this.refs.cellphone.value,
      password: this.refs.password.value
    }
    await dispatch(loginAction(type,params));
    console.log(this.props.login.account)
    if(this.props.login.account.code===200){
      this.props.history.push(`/account`)
    }
  }

  render() {
    return (
      <div className='login'>
        <div className="header"  style={{backgroundColor:'#ce3d3e',color:'#fff',justifyContent:'space-between'}}>
          <div className="arrow-left" onClick={()=>this.props.history.goBack()}></div>
          <div>手机号登录</div>
          <div></div>
        </div>

        <div className="cellphone">
          <i></i><input ref="cellphone" type="text" placeholder="手机号" value="13297907357"/>
        </div>

        <div className="password">
          <i></i><input ref="password" type="password" placeholder="密码"  value="QQ137696235"/>
        </div>

        <div className="submit" onClick={()=>this.login()}><div>登录</div></div>
        <div className="reset"><div>重设密码</div></div>
      </div>

    )
  }
}

function map(state) {
  return {
    login: state.login
  }
}

export default connect(map)(Login)
