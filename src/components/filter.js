import React, { Component } from 'react';
import {CLEAR_FILTER,FILTER_VALUE_CHANGE,CREATE_FILTER,loadFilteredItems, loadItems, LOAD_FILTERED_ITEMS, LOAD_ITEMS} from '../reducers/actions';
import { connect } from "react-redux";

class Filter extends Component {
    filterValueChange = (e) => {
        this.props.onFilterFieldValueChange(e.target.name,e.target.value)
    }
    render() {
        return (
            <div>
                <input placeholder='abv_gt' name='abv_gt' value={this.props.filter[0].value} onChange={this.filterValueChange}/>
                <input placeholder='abv_lt' name='abv_lt' value={this.props.filter[1].value} onChange={this.filterValueChange}/>
                <input placeholder='ibu_gt' name='ibu_gt' value={this.props.filter[2].value} onChange={this.filterValueChange}/>
                <input placeholder='ibu_lt' name='ibu_lt' value={this.props.filter[3].value} onChange={this.filterValueChange}/>
                <input placeholder='ebc_gt' name='ebc_gt' value={this.props.filter[4].value} onChange={this.filterValueChange}/>
                <input placeholder='ebc_lt' name='ebc_lt' value={this.props.filter[5].value} onChange={this.filterValueChange}/>
                <input placeholder='beer_name' name='beer_name' value={this.props.filter[6].value} onChange={this.filterValueChange}/>
                <input placeholder='yeast' name='yeast' value={this.props.filter[7].value} onChange={this.filterValueChange}/>
                <input placeholder='brewed_before' name='brewed_before' value={this.props.filter[8].value} onChange={this.filterValueChange}/>
                <input placeholder='brewed_after' name='brewed_after' value={this.props.filter[9].value} onChange={this.filterValueChange}/>
                <input placeholder='hops' name='hops' value={this.props.filter[10].value} onChange={this.filterValueChange}/>
                <input placeholder='malt' name='malt' value={this.props.filter[11].value} onChange={this.filterValueChange}/>
                <input placeholder='food' name='food' value={this.props.filter[12].value} onChange={this.filterValueChange}/>
                <button onClick={()=>this.props.onClearFilter()}>Clear</button> <button onClick={()=>{
                    this.props.loadFilteredItems(this.props.page);
                }}>Filter</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        filter: state.filter.filter,
        page: state.pivasik.page,
        filterQuery: state.filter.filterQuery
    }),
    dispatch => ({
        onFilterFieldValueChange: (name,value)=>{
            dispatch({ type: FILTER_VALUE_CHANGE, name: name, value: value})
        },
        onClearFilter: ()=>{
            dispatch(loadItems(1,LOAD_ITEMS,CLEAR_FILTER));
        },
        onCreateFilter: ()=>{
            dispatch({type: CREATE_FILTER});
        } ,
        loadFilteredItems: (page)=>{
            dispatch(loadItems(page,LOAD_FILTERED_ITEMS));
        }   
    })
)(Filter);
