import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Item  from './item';

class Items extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map(item => (
                        <Item key={item.id} item={item} />
                    ))
                }
            </div>
        );
    }
}
export default connect(
    state => ({
       
    }),
    dispatch => ({
    })
)(Items);