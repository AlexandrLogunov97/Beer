import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../reducers/actions';

 class Item extends Component {
  render() {
    return (
      <div onClick={()=>this.props.onSelect(this.props.item)}>
          <label>{this.props.item.id}-{this.props.item.name}</label>
      </div>
    );
  }
}
export default connect(
  state=>({
  }),
  dispatch=>({
    onSelect: (beer)=>{
      console.log(beer);
      dispatch({type:actions.SHOW_BEER, beer: beer})
    }
  })
)(Item);
