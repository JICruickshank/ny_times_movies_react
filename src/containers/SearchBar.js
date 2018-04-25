import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let userInput = event.target.value
    this.props.filter(userInput);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange}/>
      </form>
    )
  }
}

export default SearchBar;
