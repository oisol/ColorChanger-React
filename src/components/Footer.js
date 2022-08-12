// Adicionar # do readme no sobre.
import githubLogo from '../images/GitHub-Mark-64px.png';
import linkedinLogo from '../images/Linkedin-Logo.png';

function Footer() {
    return ( 
        <footer>
            <div className="footer--social">
                <a href="https://github.com/oisol/ColorChanger-React" target="_blank" rel='noreferrer'>
                    <h2 className="footer--sobre">
                        Sobre
                    </h2>
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