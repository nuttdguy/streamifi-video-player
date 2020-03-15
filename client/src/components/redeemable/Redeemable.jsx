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

        {/* {this.redeemablesItemTemplate(this.state.redeemables)} */}
        <ul className="menu-bar">
          <button> </button>
          <p>
            <button>Embers</button>
            <button>Sparks</button>
          </p>
          <button> </button>
        </ul>

        <div className="scroll">

          <ul className="caption">
            <p>Skills appear here on trance_musics channel</p>
          </ul>

          <ul>

            <li >
              <a href='#'>
                <img src='../dist/img/r1.gif'></img>

                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r2.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r5.gif'></img>
                <div >
                  <img src='../dist/img/spark-coin.svg'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r1.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r2.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r5.gif'></img>
                <div >
                  <img src='../dist/img/spark-coin.svg'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r1.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r2.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r5.gif'></img>
                <div >
                  <img src='../dist/img/spark-coin.svg'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r1.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r2.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r5.gif'></img>
                <div >
                  <img src='../dist/img/spark-coin.svg'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r1.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r2.gif'></img>
                <div >
                  <img src='../dist/img/ember.png'></img>
                  <span>500</span>
                </div>
              </a>
            </li>

            <li >
              <a href='#'>
                <img src='../dist/img/r5.gif'></img>
                <div >
                  <img src='../dist/img/spark-coin.svg'></img>
                  <span>500</span>
                </div>
              </a>
            </li>


          </ul>

        </div>
        {/* END OF SCROLL BAR */}


        <div className="stats">
          <div className="lvl">
            <div className="lvl-container" >
              <span>LVL 34</span>
            </div>
          </div>

          <div>
            <div className="spark-container">
              <img src='../dist/img/spark-coin.svg' />
              <span>69,000</span>
            </div>

            <div className="ember-container">
              <img src='../dist/img/ember.png' />
              <span>0</span>
              <button>+</button>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Redeemable;