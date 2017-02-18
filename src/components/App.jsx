class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: {},
      videos: []
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(target) {
    searchYouTube({
      query: target.value,
      max: 5,
      key: YOUTUBE_API_KEY
    },
    data => {
      this.setState({videos: data});
    });
  }

  componentDidMount() {
    searchYouTube({
      query: 'react',
      max: 5,
      key: YOUTUBE_API_KEY
    },
    data => {
      this.setState({current: data[0], videos: data});
    });
  }

  render() {
    return (
      <div>
        <Nav onSearchChange={this.onSearchChange} />
        <div className="col-md-7">
          <VideoPlayer app={this} video={this.state.current} />
        </div>
        <div className="col-md-5">
          <VideoList app={this} videos={this.state.videos} />
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
