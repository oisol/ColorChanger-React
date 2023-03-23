import SocialCard from '../SocialCard';

// Styles
import { FooterContainer, Container } from './Footer.styles';

// Logos
import about from '../../assets/footer/About-64px.png';
import githubLogo from '../../assets/footer/GitHub-Mark-64px.png';
import linkedinLogo from '../../assets/footer/Linkedin-Logo.png';

const Footer = () => {
    return ( 
        <FooterContainer >
            <Container >

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

            </Container>
        </FooterContainer>
    )
}

export default Footer;
