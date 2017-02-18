class App extends React.Component {

  constructor(props) {
    let empty = {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: ''
      },
      snippet: {
        publishedAt: '',
        channelId: '',
        title: '',
        description: '',
        thumbnails: {
          default: {
            url: '',
            width: 120,
            height: 90
          },
          medium: {
            url: '',
            width: 320,
            height: 180
          },
          high: {
            url: '',
            width: 480,
            height: 360
          }
        },
        channelTitle: '',
        liveBroadcastContent: ''
      }
    };
    super(props);
    this.state = {
      current: empty,
      videos: [empty]
    };
    this.onSearchChange = this.onSearchChange.bind(this);
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
