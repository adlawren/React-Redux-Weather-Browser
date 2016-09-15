import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();

    // TODO: Fetch weather data
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return <form
      className="input-group"
      onSubmit={this.onFormSubmit}>
      <input
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange.bind(this)}
        placeholder="Get a five-day forecast in your favorite cities"
        />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
  }
}
