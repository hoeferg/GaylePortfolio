import './ProjectWrapper.css'
import Project from '../Projects/project'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "assignment", 
            href: "https://olympus-prjct.herokuapp.com/", 
            projectInfo: "Can you answer all the coding questions before the Olympus Space Station explodes? An online game that reviews content covered from the coding boot camp.",
            projectTitle: "Olympus Project",
            projectGithub: "https://github.com/hoeferg/Olympus-Project2"
        },
        {
            id: "assignment1", 
            href: "https://trufl.github.io/nonsocial-drinker/", 
            projectInfo: "Enter and exit conversations with ease! Generate a random joke and random excuse to help with social interactions.",
            projectTitle: "Social Interactions",
            projectGithub: "https://github.com/hoeferg/nonsocial-drinker"
        },
        {
            id: "assignment2", 
            href: "https://hoeferg.github.io/weather-dashboard/", 
            projectInfo: "What is your current weather? See the current weather and future forecast for any location.",
            projectTitle: "Weather Dashboard",
            projectGithub: "https://github.com/hoeferg/weather-dashboard"
        },
        {
            id: "assignment3", 
            href: "https://service-worker-bootcamp.herokuapp.com/", 
            projectInfo: "Need a text editior? This text editor is downloadable and can be used both online and offline.",
            projectTitle: "Jate",
            projectGithub: "https://github.com/hoeferg/Progressive-Web-Applucation"
        },
        {
            id: "assignment4", 
            href: "https://hoeferg.github.io/Ecommerce/", 
            projectInfo: "Need an e-commerce website? Keep track of Emails Sent, Sales Obtained, New Clients and more.",
            projectTitle: "Ecommerce",
            projectGithub: "https://github.com/hoeferg/Ecommerce"
        },
        {
            id: "assignment5", 
            href: "https://hoeferg.github.io/calender/", 
            projectInfo: "Are you in need of help keeping track of your busy day? Use this calender to help you keep track of what is happening throughout the day",
            projectTitle: "Daily Calender",
            projectGithub: "https://github.com/hoeferg/calender"
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

