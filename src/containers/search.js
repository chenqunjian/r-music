import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Nav from '../components/common/Nav'
import { Link } from 'react-router'

import Beat from '../components/music/beat'

import { searchHotAPI,searchResultAPI,clearSearchResultAPI} from '../actions/search'
import Storage from '../storage'

class Search extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   searchHistory: Storage.get('searchHistory') ? Storage.get('searchHistory').split(',') : [],
    // }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(searchHotAPI())
    let page = 1
    // dispatch(searchResultAPI('陈奕迅',page))
  }

  searchEvt(keyword,page=1){
    alert(1)
    const { dispatch } = this.props;
    keyword = keyword || this.refs.keyword.value
    if(keyword!=''){
      dispatch(searchResultAPI(keyword, page));
    }else{
      dispatch(clearSearchResultAPI());
    }
    this.refs.keyword.value = keyword;
  }

  clear(){
    const { dispatch } = this.props;
    dispatch(clearSearchResultAPI());
    this.refs.keyword.value = '';
  }

  render() {
    const { dispatch,controll,search } = this.props;
    alert(JSON.stringify(search))
    //const { searchHistory } = this.state;
    const hasResult = search.result.length > 0;
    const searchHistory = Storage.get('searchHistory') ? Storage.get('searchHistory').split(',') : []
    return (
      <div className='root' style={{fontSize:'1.2rem'}}>

        <div className="header" style={{backgroundColor:'#ce3d3e',color:'#fff',display:'flex',justifyContent: 'space-between',padding:'0 1rem'}}>
          
          <span onClick={()=>this.searchEvt()}>返回</span>
          <div>
            <input placeholder="搜索音乐" ref="keyword" style={Styles.input}/>
            <span style={{color:'#777',marginLeft:'-1.2rem'}} onClick={()=>this.clear()}>X</span>
          </div>
          <span onClick={()=>this.searchEvt()}>搜索</span>
        </div>

        

        <div className="container" style={{color:'#555'}}>
          {
            search.result.length == 0 ?
              <div>
                热门搜索：
                <div style={Styles.labels}>
                  {
                    search.hots.map((obj) =>
                     <label onClick={()=>this.searchEvt(obj.keyword)} style={Styles.label}>{obj.keyword}</label>
                    )
                  }
                </div>
                <hr />
                搜索历史：
                <div style={Styles.labels}>
                  {
                    searchHistory.map((str) =>
                     <div onClick={()=>this.searchEvt(str)} style={Styles.label}>{str}</div>
                    )
                  }
                </div>
              </div>
              :
              <div style={{display:'flex',flexFlow:'column'}}>
                {
                  search.result.map((obj) =>
                    <div style={{padding:'0.5rem'}}>{obj.filename}</div>
                  )
                }
              </div>
          }

          

        </div>

        <Nav/>

      </div>
    )
  }
}

const Styles = {
  input: {
    width:'13rem',
    height: '1.6rem',
    borderRadius:'.4rem',
    outline:'none',
    fontSize: '1.1rem',
    border: '1px solid #e5e5e5',
  },
  labels: {
    display:'flex',
    flexFlow:'row wrap',
    justifyContent:'space-around',
  },
  label: {
    padding: '.5rem',
    width: '6rem',
    display: 'flex',
    justifyContent: 'center',
  }
}

function map(state) {
  return {
    search: state.search,
    controll: state.music.controll
  }
}

export default connect(map)(Search)
