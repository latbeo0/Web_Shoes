import {
    ArrowForwardIos,
    ArrowBackIos,
    Person,
    Favorite,
    Room,
    Note,
} from '@material-ui/icons';
import {
    Container,
    List,
    Item,
    Wrapper,
    Title,
    SubMenu,
    SubItem,
    Separate,
    Light,
    Plur,
} from './MenuMobile_Elements';

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
