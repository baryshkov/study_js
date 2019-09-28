import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'term': '',
      'location': '',
      'sortBy': 'best_match',
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.getSortByClass = this.getSortByClass.bind(this);
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ 'sortBy': sortByOption });
  }

  handleTermChange(e) {
    this.setState({'term' : e.target.value})
  }
  handleLocationChange (e) {
    this.setState({'location' : e.target.value})
  }
  handleSearch(e) {
    const term = this.state.term;
    const location = this.state.location;
    const sortBy = this.state.sortBy;
    this.props.searchYelp(term, location, sortBy);
    e.preventDefault();
  }

  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
          <li key={sortByOptionValue}
              className={this.getSortByClass(sortByOptionValue)}
              // onClick={this.handleSortByChange(sortByOptionValue)}
              // it doesn't work and I don't know why yet.
              onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          >{sortByOption}</li>
      )
    })
  }

  render() {
    return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={this.handleLocationChange}/>
        <input placeholder="Where?" onChange={this.handleTermChange}/>
      </div>
      <div className="SearchBar-submit" onClick={this.handleSearch} href='#'>
        <a>Let's Go!</a>
      </div>
    </div>
    )
  }
}
export default SearchBar;