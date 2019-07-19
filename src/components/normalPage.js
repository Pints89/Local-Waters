import React, { Component } from 'react';

class NormalPage extends Component {
  render() {
    return (
        <div style={{backgroundColor: this.props.color}}>
            <h1>
            { this.props.title }
            </h1>
        </div>
    )
  }
}

export default NormalPage