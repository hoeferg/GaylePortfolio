import './Footer.css'
import {AiFillGithub,  AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
    return (
        <div id="footer">
            <a rel="noreferrer" href="https://github.com/hoeferg" target="_blank"><AiFillGithub/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/gayle-hoefer-61a2a3124/" target="_blank"><AiFillLinkedin/></a>
        </div>
    )
}