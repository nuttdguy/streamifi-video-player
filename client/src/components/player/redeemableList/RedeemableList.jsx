import React, { Component, Fragment } from 'react';
import Stats from './stats/Stats.jsx';
import Redeemable from './redeemable/Redeemable.jsx';
import EmberList from './emberList/EmberList.jsx'

import ApiService from '../../../../service/apiService.js'
import css from './RedeemableList.css'

class RedeemableList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redeemables: [],
      menuItems: [],
      showEmberShop: 'none',
      walletStatus: {
        wallet_id: '',
        sparks_balance: 0,
        sparks_img_src: '',
        embers_balance: 0,
        embers_img_src: '',
        level: 0
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


        const randomId = Math.floor(Math.random() * 100);

        ApiService.getWallet(randomId, (error, wallet) => {
          if (error) {
            return console.log('Error=', error);
          } else {

            const menuItems = this.filterPriceCategoriesToMenuItems(redeemables);
            const sortedItems = this.sortItemsByPriceCategory(redeemables, menuItems);

            this.setState({
              redeemables: sortedItems,
              menuItems: menuItems,
              walletStatus: wallet[0],
              hasLoaded: true
            });
          }
        }); // END OF API GET WALLET
      }

    }) // END OF API REDEEABLE

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


  onShowEmberShop() {
    const showEmberShop = this.state.showEmberShop === 'none' ? 'flex' : 'none';
    this.setState({ showEmberShop: showEmberShop })
  }


  // debits the donation amount from user balance
  donateRedeemable(e) {
    const target = e.currentTarget;
    const debitAmount = target.querySelector('span').innerHTML;

    let name = target.querySelector('button').getAttribute('name').toLowerCase();
    name = name + '_balance'; // append balance to match state declaration

    const wallet = Object.assign({}, this.state.walletStatus);
    const balance = wallet[name] - debitAmount < 0 ? 0 : wallet[name] - debitAmount;

    wallet[name] = balance;
    this.setState({ ...this.state, walletStatus: wallet })
  }


  // Scrolls to location target of item category
  goToLoc(e) {
    const target = e.target.innerHTML;
    const loc = window.location.href.split('#');
    window.location.href = loc[0] + '#' + target;
  }


  // Purchase embers locally
  onBuyEmbers(amount) {
    const walletStatus = {...this.state.walletStatus};
    const addAmount = amount.split(',').join('');
    const balance = parseInt(walletStatus.embers_balance) + parseInt(addAmount);
    walletStatus.embers_balance = balance;

    this.setState({walletStatus: walletStatus })
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
    const { redeemables, menuItems, walletStatus, showEmberShop} = this.state;
    const { username } = this.props;

    // const display = showEmberShop ? 'flex' : 'none';
    const keys = Object.keys(redeemables);

    return (
      <div>
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
            onShowEmberShop={this.onShowEmberShop.bind(this)}
            walletStatus={walletStatus} />      {/* Display the redeemable footer stats */}

        </div>


        {/* Ember - redeemable item shop */}
        <div style={{display: showEmberShop}} 
            className={css.emberContainer}>
          { <EmberList
              onBuyEmbers={this.onBuyEmbers.bind(this)}
              onShowEmberShop={this.onShowEmberShop.bind(this)}
              emberBalance={walletStatus.embers_balance} /> }

        </div>
      </div>
    )
  }
}

export default RedeemableList;