import SocialCard from '../SocialCard';
import './Footer.css';

// Logos
import about from '../../assets/footer/About-64px.png';
import githubLogo from '../../assets/footer/GitHub-Mark-64px.png';
import linkedinLogo from '../../assets/footer/Linkedin-Logo.png';

function Footer() {
    return ( 
        <footer className='footer'>
            <div className="footer-container">

                < SocialCard 
                    pageAddress='https://github.com/oisol/ColorChanger-React/tree/master#-sobre'
                    imageSrc={about}
                    imageAlt='Circulo preto com um i dentro.'
                />
                < SocialCard 
                    pageAddress='https://github.com/oisol'
                    imageSrc={githubLogo}
                    imageAlt='Circulo preto com logo do GitHub.'
                />
                < SocialCard 
                    pageAddress='https://www.linkedin.com/in/matheus-rocha-dev'
                    imageSrc={linkedinLogo}
                    imageAlt='Circulo preto com IN logo do Linkedin.'
                />

            </div>
        </footer>
    )
}

export default Footer;
