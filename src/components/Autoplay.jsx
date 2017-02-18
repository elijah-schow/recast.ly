class Autoplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      autoplay: props.autoplay
    };
  }

  handleClick(){
    this.props.toggleAutoplay(!this.state.autoplay);
    this.setState({
      autoplay: !this.state.autoplay
    });
  }

  render(){
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.autoplay ? 'Autoplay: ON' : 'Autoplay: OFF' }
      </button>
    );
  }
}
