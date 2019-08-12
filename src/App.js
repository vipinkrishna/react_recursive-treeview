//https://github.com/vipinkrishna

import React, { Component } from 'react'
import Tree from './components/Tree';
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tree: {
        name: "root",
        data: [
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]},
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]},
          {name: "one", data: [{name: "two", data: [{name: "three", data: [{name: "four", data: null}]}]}]}
        ]
      }
    }
  }

  render() {
    return (
      <>
        <Tree name={this.state.tree.name} data={this.state.tree.data} level={0} />
      </>
    )
  }
}

export default App;
