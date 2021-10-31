import {
    ArrowForwardIos,
    ArrowBackIos,
    Person,
    Favorite,
    Room,
    Note,
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 205px;
    width: 100vw;
    height: 80vh;
    background: #4c4c4c;
    z-index: 10;
    overflow-x: hidden;
    overflow-y: scroll;
    display: none;

    .show ~ & {
        display: block;
    }

    @media only screen and (max-width: 575px) {
        top: 170px;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    position: relative;
    transition: all 0.5s ease 0s;
`;

const Item = styled.li`
    position: list-item;

    &.active > .submenu {
        right: 0;

        .arrow.back {
            position: absolute;
            left: 35px;
            pointer-events: none;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.type};
    padding: 35px 60px;
    position: relative;

    .arrow {
        font-size: 58px;
        color: white;
        position: absolute;
        right: 35px;
        pointer-events: none;
    }

    .icon {
        font-size: 58px;
        color: white;
        margin-right: 20px;
    }
`;

const Title = styled.h1`
    font-size: 38px;
    font-weight: ${(props) => (props.type === 'thin' ? '300' : '700')};
    text-transform: ${(props) => props.type !== 'normal' && 'uppercase'};
    letter-spacing: 2px;
    color: white;
    pointer-events: none;

    &.info {
        font-size: 38px;
        color: #808080;
        font-style: italic;
    }

    @media only screen and (max-width: 575px) {
        font-size: 32px;

        &.info {
            font-size: 32px;
        }
    }
`;

const SubMenu = styled.ul`
    list-style: none;
    padding: 0;
    background-color: #4c4c4c;
    height: 100%;
    position: absolute;
    right: -100%;
    top: 0;
    transition: all 0.5s ease 0s;
    width: 100%;
    z-index: 999;
    padding-left: 0px;
`;

const SubItem = styled.li`
    &.active > .submenu {
        right: 0;

        .arrow.back {
            position: absolute;
            left: 35px;
            pointer-events: none;
        }
    }
`;

const Separate = styled.div`
    border-top: ${(props) =>
        props.type === 'straight' ? '3px solid white' : '2px dashed #6f6f6f'};
`;

const Light = styled.span`
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 2px;
    color: white;
    padding-left: ${(props) => props.type === 'separate' && '10px'};
    border-left: ${(props) => props.type === 'separate' && '1px solid white'};
`;

const Plur = styled.span`
    font-size: 38px;
    color: #808080;
    padding-right: 10px;
`;

const MenuMobile = () => {
    const handleClick = (e) => {
        e.target.parentElement.classList.add('active');
    };

    const handleClickBack = (e) => {
        e.target.parentElement.parentElement.parentElement.classList.remove(
            'active'
        );
    };

    return (
        <Container>
            <List onClick={handleClick}>
                <Item>
                    <Wrapper type='space-between'>
                        <Title>Products</Title>
                        <ArrowForwardIos className='arrow' />
                    </Wrapper>
                    <SubMenu className='submenu'>
                        <SubItem onClick={handleClickBack}>
                            <Wrapper type='center'>
                                <ArrowBackIos className='arrow back' />
                                <Title>Products</Title>
                            </Wrapper>
                            <Separate type='straight' />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title type='thin'>For Male</Title>
                            </Wrapper>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title type='thin'>For Female</Title>
                            </Wrapper>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title type='thin'>Outlet Sale</Title>
                            </Wrapper>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title type='thin'>Fashion & Accessories</Title>
                            </Wrapper>
                            <Separate type='straight' />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title className='info'>
                                    People often call me <Light>LV7</Light> !
                                </Title>
                            </Wrapper>
                        </SubItem>
                    </SubMenu>
                    <Separate />
                </Item>
                <Item>
                    <Wrapper type='space-between'>
                        <Title>Male</Title>
                        <ArrowForwardIos className='arrow' />
                    </Wrapper>
                    <SubMenu className='submenu'>
                        <SubItem onClick={handleClickBack}>
                            <Wrapper type='center'>
                                <ArrowBackIos className='arrow back' />
                                <Title>Male</Title>
                            </Wrapper>
                            <Separate type='straight' />
                        </SubItem>
                        <SubItem onClick={handleClick}>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Highlights</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper type='center'>
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Male</Plur>
                                            <Light type='separate'>
                                                Highlights
                                            </Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Best Seller</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>New Arrival</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Sale Off</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Collections
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            Pineapple Or LV7
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Corluray</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Unsettling</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Irrelevant</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Temperate</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Collaboration
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            LV7 x Lucky Luke
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            LV7 x Doraemon 50 Years
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Shoes</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper type='center'>
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Male</Plur>
                                            <Light type='separate'>Shoes</Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Brand
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Basas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Vintas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Urbas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Pattas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Creas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Track 6</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Style
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>High Top</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Low Top</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Slip-on</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            All products
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Fashion & Accessories</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper
                                        type='center'
                                        style={{ padding: '35px' }}
                                    >
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Male</Plur>
                                            <Light type='separate'>
                                                Fashion & Accessories
                                            </Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Top
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Basic Tee</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Graphic Tee</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Sweatshirt</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Hoodie</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Accessory
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Hat</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Tie's Shoes</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Socks</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            Back_bag & Bag
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            See All Products
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title className='info'>
                                    People often call me <Light>LV7</Light> !
                                </Title>
                            </Wrapper>
                        </SubItem>
                    </SubMenu>
                    <Separate />
                </Item>
                <Item>
                    <Wrapper type='space-between'>
                        <Title>Female</Title>
                        <ArrowForwardIos className='arrow' />
                    </Wrapper>
                    <SubMenu className='submenu'>
                        <SubItem onClick={handleClickBack}>
                            <Wrapper type='center'>
                                <ArrowBackIos className='arrow back' />
                                <Title>Female</Title>
                            </Wrapper>
                            <Separate type='straight' />
                        </SubItem>
                        <SubItem onClick={handleClick}>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Highlights</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper type='center'>
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Female</Plur>
                                            <Light type='separate'>
                                                Highlights
                                            </Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Best Seller</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>New Arrival</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Sale Off</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Collections
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            Pineapple Or LV7
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Corluray</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Unsettling</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Irrelevant</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Temperate</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Collaboration
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            LV7 x Lucky Luke
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            LV7 x Doraemon 50 Years
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Shoes</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper type='center'>
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Female</Plur>
                                            <Light type='separate'>Shoes</Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Brand
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Basas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Vintas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Urbas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Pattas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Creas</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Track 6</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Style
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>High Top</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Low Top</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Slip-on</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            All products
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Fashion & Accessories</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <SubMenu className='submenu'>
                                <SubItem onClick={handleClickBack}>
                                    <Wrapper
                                        type='center'
                                        style={{ padding: '35px' }}
                                    >
                                        <ArrowBackIos className='arrow back' />
                                        <Title>
                                            <Plur>Female</Plur>
                                            <Light type='separate'>
                                                Fashion & Accessories
                                            </Light>
                                        </Title>
                                    </Wrapper>
                                    <Separate type='straight' />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Top
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Basic Tee</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Graphic Tee</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Sweatshirt</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Hoodie</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            Accessory
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Hat</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Tie's Shoes</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>Socks</Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin'>
                                            Back_bag & Bag
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title type='thin' className='info'>
                                            See All Products
                                        </Title>
                                    </Wrapper>
                                    <Separate />
                                </SubItem>
                                <SubItem>
                                    <Wrapper>
                                        <Title className='info'>
                                            People often call me{' '}
                                            <Light>LV7</Light> !
                                        </Title>
                                    </Wrapper>
                                </SubItem>
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper>
                                <Title className='info'>
                                    People often call me <Light>LV7</Light> !
                                </Title>
                            </Wrapper>
                        </SubItem>
                    </SubMenu>
                    <Separate />
                </Item>
                <Item>
                    <Wrapper>
                        <Title>Sale Off</Title>
                    </Wrapper>
                    <Separate />
                </Item>
                <Item>
                    <Wrapper>
                        <Title type='normal'>DiscoverYOU</Title>
                    </Wrapper>
                    <Separate type='straight' />
                </Item>
                <Item>
                    <Wrapper>
                        <Person className='icon' />
                        <Title type='normal'>User</Title>
                    </Wrapper>
                </Item>
                <Item>
                    <Wrapper>
                        <Favorite className='icon' />
                        <Title type='normal'>Wishlist</Title>
                    </Wrapper>
                </Item>
                <Item>
                    <Wrapper>
                        <Room className='icon' />
                        <Title type='normal'>Find Shop</Title>
                    </Wrapper>
                </Item>
                <Item>
                    <Wrapper>
                        <Note className='icon' />
                        <Title type='normal'>Search Order</Title>
                    </Wrapper>
                    <Separate type='straight' />
                </Item>
                <Item>
                    <Wrapper>
                        <Title className='info'>
                            People often call me <Light>LV7</Light> !
                        </Title>
                    </Wrapper>
                </Item>
            </List>
        </Container>
    );
};

export default MenuMobile;
