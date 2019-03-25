import React, { Component } from 'react'
import { connect } from 'react-redux'

class MI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      haveListData: false,
      content: ''
    }
  }
  render() {
    let { content } = this.state
    return (
      <div>
        <div className='m-tab-content'>
          {content}
        </div>       
      </div>
    );
  }
}

//生命周期
Object.assign(MI.prototype, {
  componentWillReceiveProps(nextProps) {
    let { haveListData } = this.state
    if (nextProps.tabActiveIndex === 1 && nextProps.subTabActiveIndex === 2) {
      if (haveListData) {
        console.log('小米再次进来时不会请求接口')
      } else {
        console.log('小米第一次会请求接口')
        this.setState({
          content: 'Loading...'
        })
        setTimeout(() => {
          this.setState({
            content: '小米手机',
            haveListData: true
          })
        }, 1000)
      }
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(MI)