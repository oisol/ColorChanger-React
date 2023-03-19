import './SocialCard.css';

interface SocialCardProps {
    pageAddress: string
    imageSrc: string
    imageAlt?: string
}

const SocialCard = ({ pageAddress, imageSrc, imageAlt } : SocialCardProps) => {
    return (<a href={pageAddress} target="_blank" rel='noreferrer'>
        <img src={imageSrc} alt={imageAlt} className="socialCard-image"/>
    </a>)
};

export default SocialCard;