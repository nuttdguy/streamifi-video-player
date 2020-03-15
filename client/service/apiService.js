import axios from 'axios';

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
  }

}

export default ApiService;