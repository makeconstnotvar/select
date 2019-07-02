import axios from "axios";

const provider= {
  async getCities(searchText) {
    let resp = await axios.get('https://jobrum.com/Job/SearchRegionFilter', {params: {searchText}})
    return resp.data.data;
  }
}
export {provider}