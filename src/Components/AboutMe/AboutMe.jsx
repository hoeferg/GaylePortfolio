import './AboutMe.css'
import ProfilePic from '../../images/profile.jpg'

export default function AboutMe() {
    return (
        <div id="about-me-wrapper">
            <img src={ProfilePic} alt="Picture of myself"/>
            <section id="about-me">
                <h3>About Me</h3>
                <p>Hello! My name is Gayle Hoefer. I am a full-stack web developer from Phoenix, Arizona. A few things about me: I am a problem solver, collaborative, and always motivated to learn. I love playing my eleven instruments. Thank you for visiting my page!</p>
            </section>
        </div>
    )
}