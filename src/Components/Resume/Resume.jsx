import './Resume.css';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap, SiNodedotjs, SiExpress, SiSequelize, SiHandlebarsdotjs, SiMongodb, SiPwa, SiReact, SiGraphql, SiGithub} from 'react-icons/si';
import resume from '../../images/hoeferGayleResume.pdf'


export default function Resume() {
    return (
        <section id="resume">
            <div id="skill-title-holder">
                <h3>Skills</h3>
                <a type="button" className="btn btn-primary" href={resume} download>Download Resume</a>
            </div>
            <div className="skill-holder1">
                <p><SiHtml5/> HTML</p>
                <p><SiCss3/> CSS</p>
                <p><SiJavascript/> Javascript</p>
                <p><SiJquery/> JQuery</p>
                <p><SiBootstrap/> CSS Frameworks: Bootstrap & Chukra</p>
                <p><SiNodedotjs/> Node.js</p>
                <p><SiExpress/> Express</p>
            </div>
            <div className='skill-holder2'>
                <p><SiSequelize/> MySQL & Sequelize</p>
                <p><SiHandlebarsdotjs/> Handlebars</p>
                <p><SiMongodb/> MongoDB & Mongoose</p>
                <p><SiPwa/> PWA</p>
                <p><SiReact/> React</p>
                <p><SiGraphql/> GraphQL</p>
                <p><SiGithub/> Github</p>
            </div>
        </section>
    )
}