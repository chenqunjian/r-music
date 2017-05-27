import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'
import Nav from '../components/common/Nav'
import {  BrowserRouter as Router,
  Route,Link,Redirect,Switch } from 'react-router-dom'
import Beat from '../components/music/beat'

import { loginAction } from '../actions/login'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loginAction('',{}));
  }

  render() {
    const { controll,account } = this.props
    const { inaccount, profile } = account
    return (
      <div className='root'>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          <div></div>
          <div style={{fontSize:'1.4rem'}}>账号</div>
          <Link to='/play'>
            <Beat  beat={controll === 'play'} />
          </Link>
        </div>

        <div className="container">

          <div className="box1">
            <div className="line1">
              <img src={profile.avatarUrl} />
              <div className="nameAndLevel">
                <div className="nickname">{profile.nickname}</div>
                <div className="level">Lv.7</div>
              </div>
              <div className="sign">签到</div>
            </div>
            <div className="line2">
              <div className="item">
                <label>动态</label>
                <div>6</div>
              </div>
              <div className="item">
                <label>关注</label>
                <div>6</div>
              </div>
              <div className="item">
                <label>粉丝</label>
                <div>6</div>
              </div>
              <div className="item">
                <i>icon</i>
                <label>我的资料</label>
              </div>
            </div>
          </div>

          <div className="box2">
            <div><i>icon</i>我的消息</div>
            <div className="arrow-right"></div>
          </div>

        </div>

        <Nav/>

      </div>
    )
  }
}

function map(state) {
  return {
    controll: state.music.controll,
    account: state.login.account
  }
}

const Styles = {
  content:{
    marginTop:50,
    marginBottom:50,
  }
}

export default connect(map)(App)
