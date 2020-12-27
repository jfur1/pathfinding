import React, {Component} from 'react';
import Node from './Node/Node';

import './pathfindingVisualizer.css';

export default class pathfindingVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                Foo
                <Node></Node>
            </div>
        )
    }
}