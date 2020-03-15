import "./nav.scss";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };

  render() {
    const { isClicked } = this.state;

    if (isClicked)
      return (
        <div className="nav-container">
          <button className="circle-button" onClick={() => this.handleClick()}>
            <div className="crosslines crosslines--1"></div>
            <div className="crosslines crosslines--2"></div>
          </button>

          <div className="navigation">
            <div className="item">
              <a href="/" className="nav-link" onClick={() => this.handleClick()}>Home</a>
            </div>
            <div className="item">
              <a href="/events" className="nav-link" onClick={() => this.handleClick()}>Events</a>
            </div>
            <div className="item">
              <a href="/teams" className="nav-link" onClick={() => this.handleClick()}>Teams</a>
            </div>
            {/* <div className="item">
              <Link href="/contact">
                <a className="nav-link" onClick={() => this.handleClick()}>Contact</a>
              </Link>
            </div> */}
          </div>
        </div>

      );
    else
      return (
        <button className="circle-button" onClick={() => this.handleClick()}>
          <div className="lines"></div>
          <div className="lines"></div>
          <div className="lines"></div>
        </button>
      );
  }
}
