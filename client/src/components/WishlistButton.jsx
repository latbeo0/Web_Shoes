import styled from 'styled-components';
import { useState } from 'react';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const ButtonWishlist = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    cursor: pointer;

    .iconWishlist {
        font-size: 40px;
        color: #f15e2c;
    }
`;

const Wishlist = () => {
    const [isLike, setIsLink] = useState(false);

    const handleClickLike = () => {
        setIsLink(!isLike);
    };

    return (
        <ButtonWishlist onClick={handleClickLike}>
            {isLike ? (
                <Favorite className='iconWishlist' />
            ) : (
                <FavoriteBorder className='iconWishlist' />
            )}
        </ButtonWishlist>
    );
};

export default Wishlist;
