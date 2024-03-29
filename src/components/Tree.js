//https://github.com/vipinkrishna

import React, {Component} from 'react';
import './Tree.scss'

class Tree extends Component {
    constructor() {
        super()
        this.state = {show: false}
    }
    toggleView = () => {
        this.setState({show: !this.state.show})
    }
    render() {
        const {name, data, level} = this.props
        const margin = 40
        const tree = data.map((node, key) => {
            if(node.data === null) {
              return <div className="Tree" style={{marginLeft: String((level + 1) * margin) + "px"}} key={key}>{node.name}</div>
            }
            return <Tree key={key} name={node.name} data={node.data} level={level+1} />
        })
        const sign = this.state.show ? " \u2212 " : " + "
        return (
            <>
                <div className="Tree" style={{marginLeft: String(level * margin) + "px"}} onClick={this.toggleView}>
                    <span className="Sign">{sign}</span>{name}
                </div>
                {this.state.show && tree}
            </>
        )
    }
}

export default Tree;