import './landing-page.styles.scss';
import HeaderSvg from './header-svg';

const LandingPage = () => {
    return (
        <header className="herobox">
            <img src="/images/nit meghalaya.png" alt="NIT Meghlaya Logo" className="nitlogo" />
            <div className="herobox__text">
                <img src="/images/shishir.png" alt="Shishir Logo" className="shishirlogo"/>
                <h1 className="primary-heading">Shishir'20</h1>
                <p className="tagline">The Annual Cultural Fest of <span>NIT Meghalaya</span> </p>
                <div className="herobox__socials">
                    <a href="/" className="btn-primary">Explore</a>
                    <a href="/registration" className="btn-primary">Register</a>
                </div>
            </div>
            <div className="herobox__images">
                <HeaderSvg/>
            </div>
        
        </header>
    )
}

export default LandingPage;