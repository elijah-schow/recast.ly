class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: null,
      videos: []
    };
  }

  onSearchChange(target) {
    this.props.searchYouTube({
      query: target.value,
      max: 5,
      key: YOUTUBE_API_KEY
    },
    data => {
      this.setState({videos: data});
    });
  }

  componentDidMount() {
    this.props.searchYouTube({
      query: 'react',
      max: 5,
      key: YOUTUBE_API_KEY
    },
    data => {
      this.setState({current: data[0], videos: data});
    });
  }

  onVideoChange(video) {
    this.setState({
      current: video
    });
  }

  render() {
    return (
      <div>
        <Nav onSearchChange={this.onSearchChange.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current} />
        </div>
        <div className="col-md-5">
          <VideoList onVideoChange={this.onVideoChange.bind(this)} videos={this.state.videos} />
        </div>
      </div>
    );
  }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
