import React, { Component, Fragment } from 'react';
import Stats from './stats/Stats.jsx';

import ApiService from '../../../service/apiService.js'
import styles from './Redeemables.css'

class Redeemable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redeemables: [],
      menuItems: []
    }
  }

  /////////////////////////////////////////////
  // LIFECYLE 
  /////////////////////////////////////////////

  componentDidMount() {
    this.getRedeemables();
  }

  getRedeemables() {

    ApiService.getRedeemables((error, redeemables) => {
      if (error) {
        return console.log('Error=', error);
      } else {

        const menuItems = this.filterPriceCategoriesToMenuItems(redeemables);
        this.setState({
          redeemables: redeemables,
          menuItems: menuItems
        })
      }
    })
  }



  /////////////////////////////////////////////
  // HANDLERS
  /////////////////////////////////////////////

  donateRedeemable(e) {
    // todo
    // onClick of redeemable, debit the quantity from the available balance
  }


  /////////////////////////////////////////////
  // HELPER 
  /////////////////////////////////////////////

  // Filter and extract menu items from redeemables object
  filterPriceCategoriesToMenuItems(redeemables) {
    const priceCategories = {};
    const menuItems = [];
    redeemables.forEach(item => {
      const category = item.price_category;

      if (!priceCategories.hasOwnProperty(category)) {
        priceCategories[category] = category;
        menuItems.push(category);
      }

    });
    return menuItems;
  }

  /////////////////////////////////////////////
  // HANDLERS
  /////////////////////////////////////////////

  donateRedeemable(e) {
    console.log(e.currentTarget)
    const target = e.currentTarget;
    const text = target.getElementsByTagName('span')[0].innerHTML
    console.log(text);
    // todo
    // onClick of redeemable, debit the quantity from the available balance
  }


  /////////////////////////////////////////////
  // TEMPLATES
  /////////////////////////////////////////////


  // Render menubar items 
  renderMenubar(items) {
    return (
      <ul className={styles.menubar}>
        <button> </button>
        <p>
          {items.map((item, idx) => { return <span key={item + idx}><button >{item}</button></span> }
          )}
        </p>
        <button> </button>
      </ul>
    )
  }

  renderItemTemplateWith(redeemableItem) {
    return (
      <li key={redeemableItem.redeemables_id}
          onClick={this.donateRedeemable}>
        <a href='#'>
          <img src={redeemableItem.img} alt="redeemableItem" ></img>

          <div >
            <img src={redeemableItem.price_category_url}></img>
            <span>500</span>
          </div>
        </a>
      </li>
    )
  }

  render() {
    const { redeemables, menuItems } = this.state;
    const { onShowShop } = this.props;

    return (
      <div className={styles.redeemableContainer}>

        {/* Displays the menubar  */}
        {this.renderMenubar(menuItems)}

        {/* Enable scrolling and display redeemable items */}
        <div className={styles.scroll}>
          <div className={styles.caption}>
            <p>Skills appear here on trance_musics channel</p>
          </div>

          <div className={styles.captionRedeemable}>
            <p>Embers</p>
          </div>

          <ul>
            {redeemables.map(redeemable => {
              return this.renderItemTemplateWith(redeemable)
            })}
          </ul>

        </div>


        {/* Display the redeemable footer stats */}
        <Stats onShowShop={onShowShop} />

      </div>
    )
  }
}

export default Redeemable;