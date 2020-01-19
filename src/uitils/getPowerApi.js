import axios from 'axios';

const getPowerApi = ()=> {
     return axios.get('https://challenge.codetain.com/api/v1/charging_status')
      .then( res => {
        return res.data.charging_status;
      })
      .catch(
        error => console.log(error)
      )
}

export default getPowerApi;
