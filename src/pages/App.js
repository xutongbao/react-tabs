import React, { Component } from 'react'
import { connect } from 'react-redux'
import Fruits from './Fruits/Fruits.js'
import Phone from './Phone/Phone.js'
import './App.css'

class App extends Component {
  render() {
    let { tabActiveIndex } = this.props
    return (
      <div>
        <button onClick={this.handleAuto.bind(this)}>自动切换</button>  
        <ul>
          <li className={"m-tab " + (tabActiveIndex === 0 ? 'active' : '')} onClick={this.handleClick.bind(this, 0)}>水果</li>
          <li className={"m-tab " + (tabActiveIndex === 1 ? 'active' : '')}  onClick={this.handleClick.bind(this, 1)}>手机</li>
        </ul>
        <div className={'m-view ' + (tabActiveIndex === 0 ? 'active' : '')}>
          <Fruits/>
        </div>    
        <div className={'m-view ' + (tabActiveIndex === 1 ? 'active' : '')}>
          <Phone/>
        </div> 
                             
      </div>
    );
  }
}

//生命周期
Object.assign(App.prototype, {
  componentDidMount() {
    this.props.TABS_CHANGAE_STATE(['tabActiveIndex'], 0)
    this.props.TABS_CHANGAE_STATE(['subTabActiveIndex'], 0)
  }
})

//事件
Object.assign(App.prototype, {
  handleClick(tabActiveIndex) {
    this.props.TABS_CHANGAE_STATE(['tabActiveIndex'], tabActiveIndex)
    this.props.TABS_CHANGAE_STATE(['subTabActiveIndex'], 0)
  },
  handleAuto() {
    this.props.TABS_CHANGAE_STATE(['tabActiveIndex'], Math.floor(Math.random() * 1.9))
    this.props.TABS_CHANGAE_STATE(['subTabActiveIndex'], Math.floor(Math.random() * 2.9))    
  }
})

const mapStateToProps = (state) => {
  return {
    tabActiveIndex: state.getIn(['tabs', 'tabActiveIndex']),
    subTabActiveIndex: state.getIn(['tabs', 'subTabActiveIndex'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    TABS_CHANGAE_STATE: (key, value) => {
      dispatch({ type: 'TABS_CHANGAE_STATE', key, value })
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
