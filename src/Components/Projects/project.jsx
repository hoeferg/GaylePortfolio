import './project.css'
import { AiFillGithub } from 'react-icons/ai';

export default function Project({projectInfo}) {
    return (
        <a className="content-card col-11 col-lg-5 my-4" id={projectInfo.id} href={projectInfo.href} target="_blank">
            <div></div>
            <p>{projectInfo.projectInfo}</p>
            <h4>{projectInfo.projectTitle} <AiFillGithub/></h4>
        </a>
    )
}