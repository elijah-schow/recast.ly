class Search extends React.Component {

  constructor(props){
    super(props);
    this.state = {value:''};
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          onChange = {this.handleChange.bind(this)}
          value={this.state.value}
          className="form-control"
          type="text"
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
