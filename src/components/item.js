import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div>
          <label>{this.props.item.id}-{this.props.item.name}</label>
      </div>
    );
  }
}
