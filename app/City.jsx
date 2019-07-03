import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import Select from "react-select";

@inject("$city")
@observer
class City extends Component {
  componentDidMount() {
    this.props.$city.getCities();
  }
  
  handleChange = selectedOption => {
    console.log('handleChange', selectedOption);
    this.props.$city.setSelected(selectedOption);
  };
  
  search = (searchText, {action}) => {
    if (action === "input-change")
      this.props.$city.getCities(searchText);
  };

  formatOptionLabel = (option, args) => {
    if (args.context === 'menu')
      return <div className="flex-row">{option.name} <span className="flex-right">{option.count}</span></div>;
    if (args.context === 'value')
      return option.name;
  };
  
  render() {
    const {$city} = this.props;
    console.log('items',$city.items);
    return (
      <div className="select">
        <div>Cities test</div>
        <Select value={$city.selected}
                onChange={this.handleChange}
                options={$city.items}
                filterOption={null}
                isClearable={true}
                onInputChange={this.search}
                placeholder="Все города"
                formatOptionLabel={this.formatOptionLabel}/>
      </div>
    )
  }
}

export {City}
