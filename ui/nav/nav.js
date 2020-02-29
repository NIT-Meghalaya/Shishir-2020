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
    console.log("CLICK");
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
            X
          </button>
          <div className="logo-wrap">LOGO</div>
          <div className="item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="item">
            <Link href="/events">
              <a>Events</a>
            </Link>
          </div>
          <div className="item">
            <Link href="/teams">
              <a>Teams</a>
            </Link>
          </div>
          <div className="item">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
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
