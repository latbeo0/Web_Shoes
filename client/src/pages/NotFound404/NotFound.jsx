import {
    NotFoundContainer,
    NotFoundImg,
    Label,
    BackButton,
    LinkR,
} from './NotFound_Elements';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <NotFoundImg src='https://i.ibb.co/hYTjhvb/404-SVG-Animated-Page-Concept.png'></NotFoundImg>
            <Label>Page Not Found</Label>
            <LinkR to='/'>
                <BackButton>BACK</BackButton>
            </LinkR>
        </NotFoundContainer>
    );
};

export default NotFound;
