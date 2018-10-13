import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../reducers/actions';
import  Item  from './item';

class Items extends Component {
    render() {
        console.log(this.props.items);
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