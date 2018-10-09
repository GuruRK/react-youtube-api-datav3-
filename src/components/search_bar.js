import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  // handleChange = e => {
  //   this.setState({
  //     term: e.target.value
  //   });
  //   console.log(this.state.term);
  // };

  handleChange = term => {
    this.setState({term})
    this.props.onTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} 
        onChange={e => this.handleChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
