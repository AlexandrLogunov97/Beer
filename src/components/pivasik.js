import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../reducers/actions';
import '../App.css';

class Pivasik extends Component {
  render() {
    let visible=this.props.modalState===true? 'block': 'none';
    return (
      <div className='modal' style={{display: visible}} >
          <button style={{float: 'right'}} onClick={()=>this.props.onHide()}>X</button><br/>
          <label>Name: {this.props.beer.name}</label><br/>
          <label>First brewed: {this.props.beer.first_brewed}</label><br/>
          <label>Picture</label><br/>
          <img style={{width: 100, height: 200}} src={this.props.beer.image_url}/><br/>
          <label>Tag line: {this.props.beer.tagline}</label><br/>
          <label>Abv: {this.props.beer.abv}</label><br/>
          <label>Ibu: {this.props.beer.ibu}</label><br/>
          <label>Target fg: {this.props.beer.target_fg}</label><br/>
          <label>Target og: {this.props.beer.target_og}</label><br/>
          <label>Ebc: {this.props.beer.ebc}</label><br/>
          <label>Srm: {this.props.beer.srm}</label><br/>
          <label>Ph: {this.props.beer.ph}</label><br/>
          <label>Attenuation level: {this.props.beer.attenuation_level}</label><br/>
         
          <p>Discription: {this.props.beer.description}</p><br/>
      </div>
    );
  }
}

export default connect(
  state=>({
    beer: state.pivasik.selectedItem,
    modalState: state.pivasik.modalState
  }),
  dispatch=>({
    onSelect: (beer)=>{
      dispatch({type:actions.SHOW_BEER, beer: beer})
    },
    onHide: ()=>{
      dispatch({type:actions.HIDE_BEER})
    }
  })
)(Pivasik);
