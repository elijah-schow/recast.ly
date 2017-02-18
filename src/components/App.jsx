class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      current: null
    };
  }

  onVideoChange(video) {
    this.setState({
      current: video
    });
  }

  fetchVideos(query){
    this.props.searchYouTube({
      query: query,
      max: 5,
      key: YOUTUBE_API_KEY
    },
    videos => {
      this.setState({
        videos: videos,
        current: videos[0]
      });
    });
  }

  componentDidMount() {
    this.fetchVideos('react javascript');
  }

  render() {
    return (
      <div>
        <Nav onSearchChange={this.fetchVideos.bind(this)} />
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
