import React, {Component} from 'react'
import Select from 'react-select'

class SelectFilter extends Component {

  state = {
    selected: []
  }

  changeSelection = selected => this.setState({selected})

  render() {
    const {selected} = this.state;
    const {articles} = this.props;

    const options = articles.map( article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options={options}
        value={selected}
        onChange={this.changeSelection}
        isMulti
      />

    )
  }

}

export default SelectFilter