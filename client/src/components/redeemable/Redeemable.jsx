import React, { Component, Fragment } from 'react';
import ApiService from '../../../service/apiService.js'
import './Redeemables.css'

class Redeemable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redeemables: [],
    }
  }

  componentDidMount() {
    this.getRedeemables();
  }

  getRedeemables() {
    ApiService.getRedeemables((error, redeemables) => {
      if (error) {
        return console.log('Error=', error);
      } else {
        this.setState({
          redeemables: redeemables
        })
        return;
      }
    })
  }

  redeemablesItemTemplate(redeemables) {

    const labels = {};
    for (let key in redeemables) {
      if (redeemables[key]['price_category']) {
        labels[redeemables[key]['price_category']] = redeemables[key]['price_category'];
      }
    }

    const labelList = [];
    for (let key in labels) {
      labelList.push(labels[key]);
    }

    const labelItems = labelList.map(label => <li>{label}</li>);

    const itemList = redeemables.map((item, idx) => {

      return (
        <ul className={'redeemable-list'}>
          <li key={item.redeemables_id} >
            <img src={item.img}></img>
            <div className={'price-container'}>
              <img className={'price'} src={'../dist/img/ember.png'}></img>
              <span>500</span>
            </div>
          </li>
        </ul>
      )
    })

    return (
      <div >
        <ul className={'redeemable-category'}>{labelItems}</ul>
        <ul className={'redeemable-caption'}>
          <li>Skills appear here on trance_musics channel</li>
        </ul>
        {itemList}
      </div>
    )
  }

  render() {

    return (
      <div className={'redeemable-container'}>

        {this.redeemablesItemTemplate(this.state.redeemables)}

        <ul>
          <li>lvl 34</li>
          <li>sparks 69,000</li>
          <li>gems 0 <a>+</a></li>
        </ul>
      </div>
    )
  }
}

export default Redeemable;