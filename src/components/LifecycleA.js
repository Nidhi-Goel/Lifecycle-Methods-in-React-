import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:'Nidhi'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('LifecycleA getDerivedStateFromProps')
        return null      
    }
    componentDidMount()
    {
        console.log('LifecycleA ComponentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'Nikki Goel'
        })
    }
  render() {
    console.log('LifecycleA render')
    return (
        <div>
      <div>
        LifecycleA
      </div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA