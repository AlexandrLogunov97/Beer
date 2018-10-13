import React, { Component } from 'react';
import Filter from './components/filter';
import Items from './components/items';
import Pivasik from './components/pivasik';
import './App.css';
import { connect } from 'react-redux';
import { loadItems,loadRandomItem, CLEAR_FILTER, LOAD_ITEMS, LOAD_FILTERED_ITEMS } from './reducers/actions';

class App extends Component {
  componentWillMount() {
    this.props.loadItems(this.props.page);
    this.props.clearFilter();
  }
  render() {
    return (
      <div>
        <Filter />
        <button onClick={()=>this.props.randomBeer()}>Random beer</button>
        <Items items={this.props.items} />
        <button disabled={!this.props.canPrev} onClick={() => {
          this.props.loadItems(this.props.page-1)
        }}>
          Prev
        </button>

        <button
          disabled={!this.props.canNext}
          onClick={() => this.props.loadItems(this.props.page+1)}>
          Next
          </button>
        Page: {this.props.page}
        <Pivasik />
      </div>
    );
  }
}

export default connect(
  state => ({
    items: state.pivasik.items,
    page: state.pivasik.page,
    canPrev: state.pivasik.canPrev,
    canNext: state.pivasik.canNext,
    query: state.filter.filterQuery
  }),
  dispatch => ({
    loadItems: (page) => dispatch(loadItems(page,LOAD_ITEMS)),
    loadFilteredItems: (page) => dispatch(loadItems(page,LOAD_FILTERED_ITEMS)),

    clearFilter: () => {
      dispatch({ type: CLEAR_FILTER })
    },
    randomBeer: ()=>{
      dispatch(loadRandomItem());
    }
  })
)(App);
