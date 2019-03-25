import React, { Component } from 'react';
import { connect } from 'react-redux'
import Apple from './Apple.js'
import HUAWEI from './HUAWEI.js'
import MI from './MI.js'

class Phone extends Component {
  constructor(props) {
    super(props)
    this.state = {  
    }      
  }
  render() {
    let { subTabActiveIndex } = this.props
    return (
      <div>
        <ul>
          <li className={"m-sub-tab " + (subTabActiveIndex === 0 ? 'active' : '')} onClick={this.handleClick.bind(this, 0)}>苹果</li>
          <li className={"m-sub-tab " + (subTabActiveIndex === 1 ? 'active' : '')} onClick={this.handleClick.bind(this, 1)}>华为</li>
          <li className={"m-sub-tab " + (subTabActiveIndex === 2 ? 'active' : '')} onClick={this.handleClick.bind(this, 2)}>小米</li>
        </ul>
        <div className={'m-view ' + (subTabActiveIndex === 0 ? 'active' : '')}>
          <Apple/>
        </div>    
        <div className={'m-view ' + (subTabActiveIndex === 1 ? 'active' : '')}>
          <HUAWEI/>
        </div>
        <div className={'m-view ' + (subTabActiveIndex === 2 ? 'active' : '')}>
          <MI/>
        </div>          
      </div>
    );
  }
}

Object.assign(Phone.prototype, {
  handleClick(subTabActiveIndex) {
    this.props.TABS_CHANGAE_STATE(['subTabActiveIndex'], subTabActiveIndex) 
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


export default connect(mapStateToProps, mapDispatchToProps)(Phone)