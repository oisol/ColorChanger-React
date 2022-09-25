import githubLogo from '../images/GitHub-Mark-64px.png';
import linkedinLogo from '../images/Linkedin-Logo.png';
import about from '../images/About-64px.png';

function Footer() {
    return ( 
        <footer>
            <div className="footer--social">
                <a href="https://github.com/oisol/ColorChanger-React/tree/master#-sobre" target="_blank" rel='noreferrer'>
                <img className="footer--github" src={about} alt="Sobre" onerror="this.onerror=null" />
                </a>
                <a href="https://github.com/oisol" target="_blank" rel='noreferrer'>
                    <img className="footer--github" src={githubLogo} alt="Github" onerror="this.onerror=null" />
                </a>
                <a href="https://linkedin.com/in/matheus-rocha-201263184" target="_blank" rel='noreferrer'>
                    <img className="footer--linkedin" src={linkedinLogo} alt="Linkedin" onerror="this.onerror=null" />
                </a>   
            </div>
        </footer>
    )
}

export default Footer;