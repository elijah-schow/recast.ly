class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  render() {
    return (
      <div>
        <Nav />
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