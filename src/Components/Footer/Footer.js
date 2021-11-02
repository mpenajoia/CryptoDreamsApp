import { Link } from 'react-router-dom';
import LI from '../img/104452_linkedin_icon.png';
import IG from '../img/1161954_instagram_icon.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <section className="foot-nav-wrapper">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </section>
            <section >
                <div className="social-pack">
                    <a href="https://www.instagram.com/marcopenajoia" rel="noopener noreferrer" target="_blank"><img className="social" src={IG} alt="IG" /></a>
                    <a href="http://www.linkedin.com/in/mpenajoia" rel="noopener noreferrer" target="_blank"><img className="social" src={LI} alt="LI" /></a>
                </div>
            </section>
            <p className="copy">© 2021 All rights and all lefts reserved.</p>
        </footer>
    )
}
export default Footer