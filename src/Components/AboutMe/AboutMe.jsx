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

            <section id="about-me">
                <h3>Mission Statement:</h3>
                <p>My mission is to create impactful applications that solve real-world problems.</p>
            </section>

            <section id="about-me">
                <h3>Portfolio's Focus</h3>
                <p>In this portfolio, you'll find a curated selection of my best work, showcasing my skills in web development. Each project represents a unique challenge and an opportunity for creative problem-solving.</p>
            </section>

            <section id="about-me">
                <h3>Get in Touch</h3>
                <p>If you're interested in collaborating, have any questions, or just want to say hello, please don't hesitate to email me at gaylehoefer@gmail.com.</p>

                <p>Thank you for visiting my portfolio. I hope you enjoy exploring my work, and I look forward to the possibility of working together on future projects.</p>
            </section>
        </div>
    )
}