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
    font-size: 52px;
    font-weight: ${(props) => (props.type === 'thin' ? '300' : '700')};
    text-transform: ${(props) => props.type !== 'normal' && 'uppercase'};
    letter-spacing: 2px;
    color: white;
    pointer-events: none;

    &.info {
        font-size: 48px;
        color: #808080;
        font-style: italic;
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
    font-size: 52px;
    font-weight: 700;
    letter-spacing: 2px;
    color: white;
    padding-left: ${(props) => props.type === 'separate' && '30px'};
    border-left: ${(props) => props.type === 'separate' && '1px solid white'};
`;

const Plur = styled.span`
    font-size: 48px;
    color: #808080;
    padding-right: 30px;
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
                            </SubMenu>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Shoes</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
                            <Separate />
                        </SubItem>
                        <SubItem>
                            <Wrapper type='space-between'>
                                <Title type='thin'>Fashion & Accessories</Title>
                                <ArrowForwardIos className='arrow' />
                            </Wrapper>
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
                    <SubMenu className='submenu' onClick={handleClickBack}>
                        <SubItem onClick={handleClickBack}>
                            <Wrapper type='center'>
                                <ArrowBackIos className='arrow back' />
                                <Title>Female</Title>
                            </Wrapper>
                            <Separate type='straight' />
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
