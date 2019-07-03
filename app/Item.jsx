import {inject, observer} from "mobx-react";
import React, {Component} from "react";
import Select from "react-select";

@inject("$item")
@observer
class Item extends Component {
  render() {
    const {$item} = this.props;
    return (
      <div className="select">
        <div>Simple test</div>
        <Select value={$item.selected}
                onChange={this.handleChange}
                options={$item.items}/>
      </div>
    )
  }
}

export {Item}
