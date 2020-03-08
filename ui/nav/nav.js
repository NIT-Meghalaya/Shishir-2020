import Link from "next/link";
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
              <Link href="/">
                <a className="nav-link" onClick={() => this.handleClick()}>Home</a>
              </Link>
            </div>
            <div className="item">
              <Link href="/events">
                <a className="nav-link" onClick={() => this.handleClick()}>Events</a>
              </Link>
            </div>
            <div className="item">
              <Link href="/teams">
                <a className="nav-link" onClick={() => this.handleClick()}>Teams</a>
              </Link>
            </div>
            <div className="item">
              <Link href="/contact">
                <a className="nav-link" onClick={() => this.handleClick()}>Contact</a>
              </Link>
            </div>
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
