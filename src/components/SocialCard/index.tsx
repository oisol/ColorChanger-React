import { IconImage } from "./SocialCard.styles"

interface SocialCardProps {
    pageAddress: string
    imageSrc: string
    imageAlt?: string
}

const SocialCard = ({ pageAddress, imageSrc, imageAlt } : SocialCardProps) => {
    return (<a href={pageAddress} target="_blank" rel='noreferrer'>
        <IconImage src={imageSrc} alt={imageAlt}/>
    </a>)
};

export default SocialCard;