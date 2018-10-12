import React, { Component } from 'react';
import Filter from './components/filter';
import Items from './components/items';
import { Pivasik } from './components/pivasik';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loadItems, loadFilteredItems, PREV_PAGE, NEXT_PAGE, CLEAR_FILTER } from './reducers/actions';

class App extends Component {
  componentWillMount() {
    this.props.loadItems(this.props.page);
    this.props.clearFilter();
  }
  render() {
    return (
      <div>
        <Filter />
        <Items items={this.props.items} />
        <button disabled={!this.props.canPrev} onClick={() => {
          this.props.loadItems(--this.props.page)
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
    mode: state.pivasik.mode,
    query: state.pivasik.filterQuery
  }),
  dispatch => ({
    loadItems: (page) => dispatch(loadItems(page)),
    loadFilteredItems: (page, query) => dispatch(loadFilteredItems(page)),

    clearFilter: () => {
      dispatch({ type: CLEAR_FILTER })
    },
  })
)(App);
