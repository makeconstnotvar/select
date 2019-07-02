import "@babel/polyfill"
import React, {Component} from "react";
import Select from "react-select";
import {observer, inject} from "mobx-react";


@inject("$city", "$item")
@observer
class App extends Component {

  componentDidMount() {
    this.props.$city.getCities();
  }

  handleChange = selectedOption => {
    this.props.$city.setSelected(selectedOption);
  };


  render() {
    const {$city, $item} = this.props;
    console.log("selected", $city.selected);
    return <div>
      <h1>React-select</h1>
      <div className="flex-row">
        <div className="select">
          <div>Simple test</div>
          <Select value={$item.selected}
                  onChange={this.handleChange}
                  options={$item.items}/>
        </div>
        <div className="select">
          <div>Cities test</div>
          <Select value={$city.selected}
                  onChange={this.handleChange}
                  options={$city.items}/>
        </div>
      </div>
    </div>
  }

}

export {App}