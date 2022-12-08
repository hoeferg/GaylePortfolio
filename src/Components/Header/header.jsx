import './header.css';
import ProfilePic from '../../images/gayle.png';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';


export default function Header() {
    return (
        <header>
            <div>
                <img src={ProfilePic} alt="Picture of Gayle"/>
                <h2>Gayle Hoefer</h2>
            </div>
            <nav>
                <a className='header-anchor' rel="noreferrer" href="https://github.com/hoeferg" target="_blank"><AiFillGithub/></a>
                <a className='header-anchor' rel="noreferrer" href="https://www.linkedin.com/in/gayle-hoefer-61a2a3124/" target="_blank"><AiFillLinkedin/></a>
            </nav>
        </header>
    )
}