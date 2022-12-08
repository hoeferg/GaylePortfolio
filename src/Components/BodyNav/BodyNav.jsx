import './BodyNav.css'

export default function BodyNav({page, pageSwapHandler}) {
    return (
        <ul className="nav nav-pills nav-fill body-nav" id="body-Nav">
            <li className="nav-item">
                <a className={(page === 'About Me') ? "nav-link active" : "nav-link"} aria-current="page" style={{color: 'white', fontSize: '1.5em'}} onClick = {()=>pageSwapHandler('About Me')} href="#body-Nav">About Me</a>
            </li>
            <li className="nav-item">
                <a className={(page === 'Projects') ? "nav-link active" : "nav-link"} aria-current="page" onClick = {()=>pageSwapHandler('Projects')} style={{color: 'white', fontSize: '1.5em'}} href="#body-Nav">Projects</a>
            </li>
            <li className="nav-item">
                <a className={(page === 'Resume') ? "nav-link active" : "nav-link"} onClick = {()=>pageSwapHandler('Resume')} style={{color: 'white', fontSize: '1.5em'}} href="#body-Nav">Resume</a>
            </li>
            <li className="nav-item">
                <a className={(page === 'Contact Me') ? "nav-link active" : "nav-link"} onClick = {()=>pageSwapHandler('Contact Me')} style={{color: 'white', fontSize: '1.5em'}} href="#body-Nav">Contact Me</a>
            </li>
        </ul>
    )
}