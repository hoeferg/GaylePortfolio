import './ProjectWrapper.css'
import Project from '../Projects/project'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "assignment5", 
            href: "https://healthcare-download.com", 
            projectInfo: "Healthcare Download is a healthcare analytics site where users can view their healthcare information. This includes health history, drug history, drug interactions, and health plan. I have on the team that has created this since January 2023.",
            projectTitle: "Healthcare Download",
        },
        {
            id: "assignment0", 
            href: "https://hoeferg.github.io/GaylePortfolio//", 
            projectInfo: "This website was fun to create and is up to date with the latest projects I have completed. The technology used for the portfolio are express.js, react, node.js, javascript, and html5.",
            projectTitle: "This Portfolio",
            projectGithub: "https://github.com/hoeferg/GaylePortfolio"
        },
        {
            id: "assignment", 
            href: "https://olympus-prjct.herokuapp.com/", 
            projectInfo: "Can you answer all the coding questions before the Olympus Space Station explodes? An online game that reviews content covered from the coding boot camp. The technology used for olympus are mongoDB, express.js, react, node.js, javascript, html5, Heroku, JSON web token, stripe, charkra, and graphQL.",
            projectTitle: "Olympus Project",
            projectGithub: "https://github.com/hoeferg/Olympus-Project2"
        },
        {
            id: "assignment1", 
            href: "https://trufl.github.io/nonsocial-drinker/", 
            projectInfo: "Enter and exit conversations with ease! Generate a random joke and random excuse to help with social interactions. he technology used for Social Interactions are express.js, node.js, javascript, and html5.",
            projectTitle: "Social Interactions",
            projectGithub: "https://github.com/hoeferg/nonsocial-drinker"
        },
        {
            id: "assignment2", 
            href: "https://hoeferg.github.io/weather-dashboard/", 
            projectInfo: "What is your current weather? See the current weather and future forecast for any location. The technology used for the weather dashboard are express.js, node.js, javascript, html5, and JSON web token.",
            projectTitle: "Weather Dashboard",
            projectGithub: "https://github.com/hoeferg/weather-dashboard"
        },
        {
            id: "assignment3", 
            href: "https://service-worker-bootcamp.herokuapp.com/", 
            projectInfo: "Need a text editior? This text editor is downloadable and can be used both online and offline. The technology used for Jate are mongoDB, express.js, node.js, javascript, html5, and Heroku.",
            projectTitle: "Jate",
            projectGithub: "https://github.com/hoeferg/Progressive-Web-Applucation"
        },
        {
            id: "assignment4", 
            href: "https://hoeferg.github.io/Ecommerce/", 
            projectInfo: "Need an e-commerce website? Keep track of Emails Sent, Sales Obtained, New Clients and more. The technology used for Ecommerce are mongoDB, express.js, react, node.js, javascript, html5, Heroku, JSON web token, and graphQL.",
            projectTitle: "Ecommerce",
            projectGithub: "https://github.com/hoeferg/Ecommerce"
        },
    ]

    return (
        <div className="row justify-content-around align-items-stretch py-5 project-wrapper">
            {projectInfo.map((element) => (
                <Project key={element.id} projectInfo={element}/>
            ))}
        </div>
    )
}

