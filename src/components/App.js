 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: false
    };
  }
  renderPara() {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.setState({ para: true })}>
          Click Me
        </button>
        {this.state.para ? this.renderPara() : ""}
      </div>
    );
  }
}

export default App;
