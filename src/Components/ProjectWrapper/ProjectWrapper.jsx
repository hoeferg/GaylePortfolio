import './ProjectWrapper.css'
import Project from '../Projects/project'

export default function ProjectWrapper() {
    let projectInfo = [
        {
            id: "assignment", 
            href: "https://olympus-prjct.herokuapp.com/", 
            projectInfo: "Can you answer all the coding questions before the Olympus Space Station explodes? An online game that reviews content covered from the coding boot camp.",
            projectTitle: "Olympus Project"
        },
        {
            id: "assignment1", 
            href: "https://trufl.github.io/nonsocial-drinker/", 
            projectInfo: "Enter and exit conversations with ease! Generate a random joke and random excuse to help with social interactions.",
            projectTitle: "Social Interactions"
        },
        {
            id: "assignment2", 
            href: "https://hoeferg.github.io/weather-dashboard/", 
            projectInfo: "What is your current weather? See the current weather and future forecast for any location.",
            projectTitle: "Weather Dashboard"
        },
        {
            id: "assignment3", 
            href: "https://service-worker-bootcamp.herokuapp.com/", 
            projectInfo: "Need a text editior? This text editor is downloadable and can be used both online and offline.",
            projectTitle: "Jate"
        },
        {
            id: "assignment4", 
            href: "https://github.com/hoeferg/e-commerce", 
            projectInfo: "Need an e-commerce website? Here the backend of an ecommerce website",
            projectTitle: "Ecommerce backend"
        },
        {
            id: "assignment5", 
            href: "https://hoeferg.github.io/calender/", 
            projectInfo: "Are you in need of help keeping track of your busy day? Use this calender to help you keep track of what is happening throughout the day",
            projectTitle: "Daily Calender"
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

