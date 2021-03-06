import React, { Component } from 'react';
import Ember from './Ember.jsx'

import css from './EmberList.css';
import ApiService from '../../../../../service/apiService.js'

class EmberList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            embers: []
        }
    }

    componentDidMount() {
        this.loadInitialState();
    }

    loadInitialState() {

        ApiService.getEmbers((error, embers) => {
            if (error) {
                return console.log('Error=', error);
            }

            this.setState({ embers: embers })
        });
    }


    render() {
        const { embers } = this.state;
        const { onShowEmberShop, emberBalance, onBuyEmbers } = this.props;

        return (
            <div className={css.dialog}>
                <div className={css.emberContainer}>
                    <EmberTitle
                        heading={'support with embers'}
                        subheading={'Use embers on premium skills to add hype and help Mixer creators earn cash.'} />

                    <div className={css.contentContainer}>

                        {embers.map(ember => {
                            return (
                                <Ember 
                                    key={ember.ember_id}
                                    label={ember.label}
                                    offerTitle={ember.offer_title}
                                    amount={ember.amount}
                                    offerImgSrc={ember.offer_img_url}
                                    alt={ember.alt}
                                    promotion={ember.promotion}
                                    cost={ember.cost}
                                    onBuyEmbers={onBuyEmbers} />
                            )
                        })}

                    </div>

                    <EmberFooter
                        heading={'Your Ember Balance'}
                        emberImgSrc={'https://streamifi.s3-us-west-1.amazonaws.com/img/ember.png'}
                        alt={'ember coin'}
                        balance={emberBalance} />


                    <EmberClose
                        label={'Close dialog'}
                        onShowEmberShop={onShowEmberShop}  />

                </div>
            </div>
        )
    }
}

export default EmberList;



const EmberTitle = ({ heading, subheading }) => (
    <div>
        <h1>{heading}</h1>
        <p>{subheading}</p>
    </div>
)

const EmberFooter = ({ heading, emberImgSrc, alt, balance }) => (
    <div className={css.footer}>
        <div className={css.balance}>
            {heading}
        <img src={emberImgSrc} alt={alt} aria-hidden="true" />
            <span>{balance}</span>
        </div>
    </div>
)

const EmberClose = ({ onShowEmberShop, label }) => (
    <button
        onClick={onShowEmberShop}
        className={css.closeBtn}
        aria-label={label}>

        <span className={`${css["set-mixer"]} ${css["icon-Close"]}`}> </span>
    </button>
)