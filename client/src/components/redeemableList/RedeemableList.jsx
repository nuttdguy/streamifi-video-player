import React, { Component, Fragment } from 'react';
import Stats from './stats/Stats.jsx';
import Redeemable from './redeemable/Redeemable.jsx';


import ApiService from '../../../service/apiService.js'
import css from './RedeemableList.css'

class RedeemableList extends Component {

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
    this.loadInitialState();
  }


  /////////////////////////////////////////////
  // HELPER 
  /////////////////////////////////////////////


  loadInitialState() {

    ApiService.getRedeemables((error, redeemables) => {
      if (error) {
        return console.log('Error=', error);
      } else {

        const menuItems = this.filterPriceCategoriesToMenuItems(redeemables);
        const sortedItems = this.sortItemsByPriceCategory(redeemables, menuItems);
        const walletStats = this.moldWalletStatsFrom();

        this.setState({
          redeemables: sortedItems,
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
    return menuItems.reverse();
  }

  // temporary, requires data for the current user
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


  // sorts the redeemable data by the price category group
  sortItemsByPriceCategory(redeemables, menuItems) {
    const channels = {};
    menuItems.forEach(item => channels[item] = []);

    for (let i = 0; i < redeemables.length; i++) {
      const redeemable = redeemables[i];

      for (let key in channels) {
        if (redeemable.price_category === key) {
          channels[key].push(redeemable);
        }
      }
    }
    return channels;
  }

  /////////////////////////////////////////////
  // HANDLERS
  /////////////////////////////////////////////


  // debits the donation amount from user balance
  donateRedeemable(e) {
    const target = e.currentTarget;
    const debitAmount = target.querySelector('span').innerHTML;
    const name = target.querySelector('button').getAttribute('name').toLowerCase();

    const wallet = Object.assign({}, this.state.walletStats);
    const balance = wallet[name] - debitAmount < 0 ? 0 : wallet[name] - debitAmount;

    wallet[name] = balance;
    this.setState({ walletStats: wallet })
  }


  // Scrolls to location target of item category
  goToLoc(e) {
    const target = e.target.innerHTML;
    const loc = window.location.href.split('#');
    window.location.href = loc[0] + '#' + target;
  }


  /////////////////////////////////////////////
  // TEMPLATES
  /////////////////////////////////////////////


  // Render menubar items 
  renderMenubar(items) {
    return (
      <div className={css.tabControl}>
        <a href='#toTop' className={css.tabButtonLeft} >
          <span className={css.chevronLeft}></span>
        </a>
        <div className={css.tabsContainer}>
          <div className={css.tabsContent}>

            {items.map((tabItem, idx) => {
              return <button
                onClick={this.goToLoc.bind(this)}
                className={css.tabsItem}
                key={idx}>{tabItem}</button>
            })}

          </div>
        </div>
        <a href='#toBottom' className={css.tabButtonRight} >
          <span className={css.chevronRight}></span>
        </a>
      </div>

    )
  }

  
  renderCaption(username) {

    const avatar = 'https://streamifi.s3-us-west-1.amazonaws.com/img/avatar64.jpg';
    const caption = 'Using skills supports';

    return (
      <div>
        <img src={avatar} />
        <span> {caption}
          <span className={css.captionUsername}>{username}</span>
        </span>
      </div>
    )
  }


  render() {
    const { redeemables, menuItems, walletStats } = this.state;
    const { onShowShop, username } = this.props;

    const keys = Object.keys(redeemables);

    return (
      <div className={css.redeemContainer}>


        {this.renderMenubar(menuItems)}     {/* Displays the menubar  */}

        <div className={css.scroll}>        {/* Enable scrolling and display redeemable items */}
          <div id='toTop'></div>


          <div className={css.caption}>     {/* Render the caption */}
            {this.renderCaption(username)}
          </div>


          <div>
            {keys.map((categoryHeader, idx) => {
              return <Redeemable
                key={idx}
                redeemables={redeemables[categoryHeader]}
                categoryHeader={categoryHeader}
                donateRedeemable={this.donateRedeemable.bind(this)} />
            })}
          </div>

          <div id='toBottom'></div>
        </div>


        <Stats
          onShowShop={onShowShop}
          walletStats={walletStats} />      {/* Display the redeemable footer stats */}

      </div>
    )
  }
}

export default RedeemableList;