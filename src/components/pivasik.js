import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actions';
import '../App.css';

class Pivasik extends Component {
  render() {
    let visible = this.props.modalState === true ? 'block' : 'none';
    return (
      <React.Fragment>
        <div className='modal' style={{ display: visible }} onClick={() => this.props.onHide()}>
        </div>
        <div className='modal-body' style={{ display: visible }}>
          <button style={{ float: 'right' }} onClick={() => this.props.onHide()}>X</button><br />
          <div className='modal-content'>
            <label>Name: {this.props.beer.name}</label><br />
            <label>First brewed: {this.props.beer.first_brewed}</label><br />
            <label>Picture</label><br />
            <img style={{ width: 100, height: 200 }} alt='error blat' src={this.props.beer.image_url} /><br />
            <label>Tag line: {this.props.beer.tagline}</label><br />
            <label>Abv: {this.props.beer.abv}</label><br />
            <label>Ibu: {this.props.beer.ibu}</label><br />
            <label>Target fg: {this.props.beer.target_fg}</label><br />
            <label>Target og: {this.props.beer.target_og}</label><br />
            <label>Ebc: {this.props.beer.ebc}</label><br />
            <label>Srm: {this.props.beer.srm}</label><br />
            <label>Ph: {this.props.beer.ph}</label><br />
            <label>Attenuation level: {this.props.beer.attenuation_level}</label><br />
            {
              <label>Volume: {this.props.beer.volume ? `(value: ${this.props.beer.volume.value}, unit:  ${this.props.beer.volume.unit})` : 'Empty'}</label>
            }<br />
            {
              <label>Boil volume: {this.props.beer.boil_volume ? `(value: ${this.props.beer.boil_volume.value}, unit:  ${this.props.beer.boil_volume.unit})` : 'Empty'}</label>
            }<br />
            Ingredients:<br />
            - Malt:<br />
            {
                this.props.beer.ingredients? this.props.beer.ingredients.malt?this.props.beer.ingredients.malt.map((x,index)=>(
                <React.Fragment>
                  <label key={index}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}) </label><br />
                </React.Fragment>
                )):'Empty':'Empty'
            }
            -Hops:<br />
            {
                this.props.beer.ingredients? this.props.beer.ingredients.hops?this.props.beer.ingredients.hops.map((x,index)=>(
                <React.Fragment>
                  <label key={index}>  {index + 1}. Name: {x.name}, amount: (value: {x.amount.value}, unit: {x.amount.unit}), {x.add}, {x.attribute}</label><br />
                </React.Fragment>
                )):'Empty':'Empty'
            } 
            {
                <label>-Yeast: {this.props.beer.ingredients?this.props.beer.ingredients.yeast:'empty'}</label>
            }<br/>
            Food pairing:<br />
            {
              this.props.beer.food_pairing ? this.props.beer.food_pairing.map((x, index) => (
                <React.Fragment>
                  <label key={index}>  {index + 1}. {x}</label><br />
                </React.Fragment>
              )) : 'Empty'
            }
            Method:<br/>
            -Mash temp:<br/>
            {
              this.props.beer.method?this.props.beer.method.mash_temp?this.props.beer.method.mash_temp.map((x,index)=>(
                <React.Fragment>
                  <label key={index}>{index+1}. temp (value: {x.temp.value}, unit: {x.temp.unit}), duration: {x.duration}</label><br/>
                </React.Fragment>
              )):'Empty':'Empty'
            }
            -Fermentation:<br/>
            {
              this.props.beer.method?this.props.beer.method.fermentation?
              <label>temp (value: {this.props.beer.method.fermentation.temp.value}, unit: {this.props.beer.method.fermentation.temp.unit})</label>:'Empty':'Empty'
            }<br/>
            {
              <label>Brewers tips: {this.props.beer.brewers_tips}</label>
            }<br />
            {
              <label>Contributed by: {this.props.beer.contributed_by}</label>
            }<br />
            <p>Discription: {this.props.beer.description}</p><br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    beer: state.modal.selectedItem,
    modalState: state.modal.modalState
  }),
  dispatch => ({
    onSelect: (beer) => {
      dispatch({ type: actions.SHOW_BEER, beer: beer })
    },
    onHide: () => {
      dispatch({ type: actions.HIDE_BEER })
    }
  })
)(Pivasik);
