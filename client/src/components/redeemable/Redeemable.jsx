import React, { Component, Fragment } from 'react';
import Stats from './stats/Stats.jsx';

import ApiService from '../../../service/apiService.js'
import styles from './Redeemables.css'

class Redeemable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redeemables: [],
      menuItems: [],
      walletStats: {
        sparks: 0,
        embers: 0,
        level: 0,
        tokens: {
          sparks: '',
          embers: ''
        }
      },
    }
  }

  /////////////////////////////////////////////
  // LIFECYLE 
  /////////////////////////////////////////////

  componentDidMount() {
    this.getRedeemables();
  }


  /////////////////////////////////////////////
  // HELPER 
  /////////////////////////////////////////////


  getRedeemables() {

    ApiService.getRedeemables((error, redeemables) => {
      if (error) {
        return console.log('Error=', error);
      } else {

        const menuItems = this.filterPriceCategoriesToMenuItems(redeemables);
        const walletStats = this.moldWalletStatsFrom();

        this.setState({
          redeemables: redeemables,
          menuItems: menuItems,
          walletStats: walletStats
        })
      }
    })
  }



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

  moldWalletStatsFrom() {
    const wallet = {
      sparks: 5000,
      embers: 5000,
      level: 34,
      tokens: {
        sparks: '../dist/img/spark-coin.svg',
        embers: '../dist/img/ember.png'
      }
    }
    return wallet;
  }

  /////////////////////////////////////////////
  // HANDLERS
  /////////////////////////////////////////////

  donateRedeemable(e) {
    const target = e.currentTarget;
    const debitAmount = target.querySelector('span').innerHTML;
    const name = target.querySelector('div').getAttribute('name').toLowerCase();
    // console.log(name, debitAmount);

    const wallet = Object.assign({}, this.state.walletStats);
    const balance = wallet[name] - debitAmount < 0 ? 0 : wallet[name] - debitAmount;

    wallet[name] = balance;
    this.setState({walletStats: wallet })
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
    // console.log(redeemableItem);
    return (
      <li key={redeemableItem.redeemables_id}
        onClick={this.donateRedeemable.bind(this)}>
        <a href='#'>
          <img src={redeemableItem.img} alt="redeemableItem" ></img>

          <div name={redeemableItem.price_category}>
            <img src={redeemableItem.price_category_url}></img>
            <span>500</span>
          </div>
        </a>
      </li>
    )
  }

  render() {
    const { redeemables, menuItems, walletStats } = this.state;
    const { onShowShop } = this.props;

    return (
      <div className={styles.redeemContainer}>

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
        <Stats onShowShop={onShowShop}
          walletStats={walletStats} />

      </div>
    )
  }
}

export default Redeemable;