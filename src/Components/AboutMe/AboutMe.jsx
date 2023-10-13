import './AboutMe.css'
import ProfilePic from '../../images/profile.jpg'

export default function AboutMe() {
    return (
        <div id="about-me-wrapper">
            <img src={ProfilePic} alt="Female with long brown hair in a white dress witt black strips looking very professional" />
            <section id="about-me">
                <h3>About Me</h3>
                <p>I'm Gayle Hoefer, a full stack software engineer with a passion for creating projects through that help people. Throughout my career, I've had the privilege of working on projects that have allowed me to blend creativity with innovation, and my portfolio is a testament to the dedication I have for my craft.</p>
            </section>
        </div>
    )
}