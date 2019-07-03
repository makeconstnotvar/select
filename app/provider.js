import axios from "axios";

function requestCancelable(options) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  let url = options.url;
  if (pending[url]) pending[url].cancel('user cancel');
  pending[url] = source;
  options.cancelToken = source.token;
  
  return new Promise((resolve, reject) => {
    axios(options).then(resp => {
      delete pending[url];
      resolve(resp)
    }).catch(err => reject(err))
  })
  
}

let pending = {};

const provider = {
  async getCities(searchText) {
  
      let resp = await requestCancelable({url:'https://jobrum.com/Job/SearchRegionFilter',method:'get', params: {searchText}});
      return resp.data.data;
   
  }
};

export {provider}





