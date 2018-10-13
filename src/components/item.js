import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../reducers/actions';
import '../App.css';

 class Item extends Component {
  render() {
    return (
      <div className='item' onClick={()=>this.props.onSelect(this.props.item)}>
          <label>{this.props.item.id}. {this.props.item.name}</label>
      </div>
    );
  }
}
export default connect(
  state=>({
  }),
  dispatch=>({
    onSelect: (beer)=>{
      dispatch({type:actions.SHOW_BEER, beer: beer})
    }
  })
)(Item);
