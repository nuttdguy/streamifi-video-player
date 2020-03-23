import axios from 'axios';
import { CLIENT_ID, SECRET } from '../config/dev-keys';

const base_url = 'http://127.0.0.1:3005';


const ApiService = {

  getRedeemables: (callback) => {

    axios.get(`${base_url}/redeemables`)
      .then(res => {
        return callback(null, res.data);
      }).catch(err => {
        console.log('err=', err);
        return callback(err, null);
      })
  },

  getStreams: (callback) => {

    axios.get(`${base_url}/streams`)
    .then(res => {
      return callback(null, res.data);
    }).catch(err => {
      console.log('err=', err);
      return callback(err, null);
    })
  },

  getEmbers: (callback) => {

    axios.get(`${base_url}/embers`)
    .then(res => {
      return callback(null, res.data);
    }).catch(err => {
      console.log('err=', err);
      return callback(err, null);
    })
  },

  getWallet: (id, callback) => {
    axios.get(`${base_url}/wallet/`+id)
    .then(res => {
      return callback(null, res.data);
    }).catch(err => {
      console.log('err=', err);
      return callback(err, null);
    })
  }

}

export default ApiService;