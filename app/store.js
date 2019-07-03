import {action, observable} from "mobx";
import {provider} from "./provider";

class Item {
  @observable items = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];
  @observable selected = this.items[0];

  @action setSelected(item) {
    this.selected = item;
  }
}

class City {
  @observable items = [];
  @observable selected = null;

  @action setSelected(item) {
    this.selected = item;
  }

  @action getCities(searchText){
    provider.getCities(searchText).then(cities =>{
      this.items = cities;
    }).catch(()=>null);

  }
}

let store = {
  $item: new Item(),
  $city: new City()
};

export {store}
