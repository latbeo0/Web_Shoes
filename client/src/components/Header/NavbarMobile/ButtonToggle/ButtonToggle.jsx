import { Container, ToggleBox } from './ButtonToggle_Elements';
import { useState } from 'react';

const ButtonToggle = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e) => {
        setToggle(!toggle);

        e.target.parentElement.classList.toggle('hidden');
    };

    return (
        <Container className={toggle ? 'show' : ''} onClick={handleClick}>
            <ToggleBox />
        </Container>
    );
};

export default ButtonToggle;
