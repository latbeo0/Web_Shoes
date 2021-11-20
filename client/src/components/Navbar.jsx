import styled from 'styled-components';
import { KeyboardArrowDown, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 124px;
    padding: 0 20px;

    @media only screen and (max-width: 991px) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    min-width: 90px;
    height: 90px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Center = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const Categories = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
`;

const Category = styled.div`
    display: flex;
`;

const CategorySeparate = styled.div`
    height: 26px;
    border: 1px solid #e3e2e2;
    margin-bottom: 45px;
`;

const CategoryWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px 45px 20px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    position: static;
    white-space: nowrap;
    color: rgb(0, 0, 0);

    .category--drop-down {
        display: none;
    }

    &.space {
        border: none;
        position: relative;
        min-width: 126px;
    }

    &::before {
    }

    &:hover {
        color: #f15e2c;

        .category--drop-down {
            display: block;
        }

        .arrow {
            &::before {
                display: block;
            }
        }
    }
`;

const Arrow = styled.div`
    position: relative;

    &::before {
        position: absolute;
        content: '';
        top: calc(100% + 23px);
        left: -25px;
        width: 0;
        height: 0;
        border-width: 12px;
        border-style: solid;
        border-color: transparent transparent #4c4c4c transparent;
        display: block;
        z-index: 3;
        display: none;
    }
`;

const SearchContainer = styled.div`
    position: relative;

    .icon {
        position: absolute;
        top: 8px;
        left: 8px;
        color: #666666;
        font-size: 20px;
        pointer-events: none;
    }
`;

const SearchInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    height: 36px;
    width: 230px;
    padding-left: 36px;

    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        width: unset;
    }
`;

const CategoryDropDown = styled.div`
    position: absolute;
    top: 155px;
    left: 0;
    width: 100%;
    background-color: #4c4c4c;
    z-index: 2;
    padding: 35px 130px;
    cursor: unset;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    justify-content: center;
    cursor: unset;
`;

const CategoryDropDownImage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
    margin: 0 30px;
    opacity: 0.4;

    &:hover {
        opacity: 1;
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        margin: 0 15px;
    }
`;

const CategoryImgBx = styled.div`
    width: 250px;
    height: 280px;
    position: relative;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        width: 220px;
        height: 240px;
    }
`;

const CategoryImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CategoryTitle = styled.div`
    width: 100%;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: white;
    padding: 20px 10px;

    &:hover {
        color: unset;
    }
`;

const Description = styled.div`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #727272;
    font-style: italic;
    letter-spacing: 1px;
    cursor: unset;
`;

const Light = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: white;
`;

const DropDownWrapper = styled.div`
    display: flex;
    /* justify-content: space-around; */
    justify-content: center;
    margin-bottom: 50px;
`;

const Column = styled.div`
    width: 300px;
`;

const ColumnTitle = styled.div`
    font-size: 23px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin-bottom: 30px;

    &:hover {
        color: #f15e2c;
    }
`;

const Item = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: #cccccc;
    margin-bottom: 8px;

    &:hover {
        color: #f15e2c;
    }
`;

const ItemTitle = styled.div`
    font-size: 16px;
    font-weight: 900;
    color: #cccccc;
    margin: 30px 0 8px;

    &:hover {
        color: #f15e2c;
    }
`;

const ColumnSeparate = styled.div`
    width: 2px;
    border-right: #a5a5a5 2px dashed;
    margin-right: 100px;
`;

const Navbar = () => {
    return (
        <Container>
            <LogoContainer>
                <Link to='/'>
                    <Image src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg' />
                </Link>
            </LogoContainer>
            <Center>
                <Categories>
                    <Category>
                        <Link to='/products'>
                            <CategoryWrapper>
                                PRODUCT
                                <Arrow className='arrow'>
                                    <KeyboardArrowDown
                                        style={{
                                            fontSize: '22px',
                                            marginLeft: '3px',
                                            display: 'block',
                                        }}
                                    />
                                </Arrow>
                                <CategoryDropDown className='category--drop-down'>
                                    <Wrapper>
                                        {/* <Link to='/products/?gender=men'> */}
                                        <CategoryDropDownImage>
                                            <CategoryImgBx>
                                                <CategoryImg src='https://images.pexels.com/photos/7760754/pexels-photo-7760754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                            </CategoryImgBx>
                                            <CategoryTitle>
                                                For Male
                                            </CategoryTitle>
                                        </CategoryDropDownImage>
                                        {/* </Link> */}
                                        {/* <Link to='/products/?gender=women'> */}
                                        <CategoryDropDownImage>
                                            <CategoryImgBx>
                                                <CategoryImg src='https://images.pexels.com/photos/7803348/pexels-photo-7803348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                            </CategoryImgBx>
                                            <CategoryTitle>
                                                For FeMale
                                            </CategoryTitle>
                                        </CategoryDropDownImage>
                                        {/* </Link> */}
                                        {/* <Link to='/products/sale-off'> */}
                                        <CategoryDropDownImage>
                                            <CategoryImgBx>
                                                <CategoryImg src='https://images.pexels.com/photos/5872348/pexels-photo-5872348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                                            </CategoryImgBx>
                                            <CategoryTitle>
                                                Sale Off
                                            </CategoryTitle>
                                        </CategoryDropDownImage>
                                        {/* </Link> */}
                                        {/* <Link to='/products/?gender=men,women&category=top,bottom,accessories&attribute='> */}
                                        <CategoryDropDownImage>
                                            <CategoryImgBx>
                                                <CategoryImg src='https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                                            </CategoryImgBx>
                                            <CategoryTitle>
                                                Accessories
                                            </CategoryTitle>
                                        </CategoryDropDownImage>
                                        {/* </Link> */}
                                    </Wrapper>
                                    {/* <Link to='/about'> */}
                                    <Description>
                                        People often call me <Light>LV7</Light>{' '}
                                        !
                                    </Description>
                                    {/* </Link> */}
                                </CategoryDropDown>
                            </CategoryWrapper>
                        </Link>
                    </Category>
                    <CategorySeparate />
                    <Category>
                        <Link to='/products/?gender=men'>
                            <CategoryWrapper>
                                MALE
                                <Arrow className='arrow'>
                                    <KeyboardArrowDown
                                        style={{
                                            fontSize: '22px',
                                            marginLeft: '3px',
                                            display: 'block',
                                        }}
                                    />
                                </Arrow>
                                <CategoryDropDown className='category--drop-down'>
                                    <DropDownWrapper>
                                        <Column>
                                            {/* <Link to='#'> */}
                                            <ColumnTitle>
                                                Highlights
                                            </ColumnTitle>
                                            {/* </Link> */}
                                            {/* <Link to='/products/?gender=men&category=&attribute=best-seller'> */}
                                            <Item>Best Seller</Item>
                                            {/* </Link> */}
                                            <Item>New Arrival</Item>
                                            <Item>Sale Off</Item>
                                            <ItemTitle>Collections</ItemTitle>
                                            <Item>Pineapple Or LV7</Item>
                                            <Item>Corluray</Item>
                                            <Item>Irrelevant</Item>
                                            <Item>Temperate</Item>
                                            <ItemTitle>Collaboration</ItemTitle>
                                            <Item>LV7 x Lucky Luke</Item>
                                            <Item>LV7 x Doraemon 50 years</Item>
                                        </Column>
                                        <ColumnSeparate />
                                        <Column>
                                            <ColumnTitle>Shoes</ColumnTitle>
                                            <ItemTitle>Product Line</ItemTitle>
                                            <Item>Basas</Item>
                                            <Item>Vintas</Item>
                                            <Item>Urbas</Item>
                                            <Item>Pattas</Item>
                                            <Item>Creas</Item>
                                            <Item>Track 6</Item>
                                            <ItemTitle>Style</ItemTitle>
                                            <Item>High Top</Item>
                                            <Item>Low Top</Item>
                                            <Item>Slip-on</Item>
                                            <ItemTitle>
                                                Show All Shoes
                                            </ItemTitle>
                                        </Column>
                                        <Column>
                                            <>
                                                <ColumnTitle>
                                                    Fashion & Accessories
                                                </ColumnTitle>
                                                <ItemTitle>
                                                    Upper Half
                                                </ItemTitle>
                                                <Item>Basic Tee</Item>
                                                <Item>Sweatshirt</Item>
                                                <Item>Hoodie</Item>
                                                <ItemTitle>
                                                    Accessories
                                                </ItemTitle>
                                                <Item>Hat</Item>
                                                <Item>Shoelace</Item>
                                                <Item>Sock</Item>
                                                <Item>Backpacks & Bags</Item>
                                                <ItemTitle>Show All</ItemTitle>
                                            </>
                                        </Column>
                                    </DropDownWrapper>
                                    <Description>
                                        People often call me <Light>LV7</Light>{' '}
                                        !
                                    </Description>
                                </CategoryDropDown>
                            </CategoryWrapper>
                        </Link>
                    </Category>
                    <CategorySeparate />
                    <Category>
                        <CategoryWrapper>
                            FEMALE
                            <Arrow className='arrow'>
                                <KeyboardArrowDown
                                    style={{
                                        fontSize: '22px',
                                        marginLeft: '3px',
                                        display: 'block',
                                    }}
                                />
                            </Arrow>
                            <CategoryDropDown className='category--drop-down'>
                                <DropDownWrapper>
                                    <Column>
                                        <ColumnTitle>Highlights</ColumnTitle>
                                        <Item>Best Seller</Item>
                                        <Item>New Arrival</Item>
                                        <Item>Sale Off</Item>
                                        <ItemTitle>Collections</ItemTitle>
                                        <Item>Pineapple Or LV7</Item>
                                        <Item>Corluray</Item>
                                        <Item>Irrelevant</Item>
                                        <Item>Temperate</Item>
                                        <ItemTitle>Collaboration</ItemTitle>
                                        <Item>LV7 x Lucky Luke</Item>
                                        <Item>LV7 x Doraemon 50 years</Item>
                                    </Column>
                                    <ColumnSeparate />
                                    <Column>
                                        <ColumnTitle>Shoes</ColumnTitle>
                                        <ItemTitle>Product Line</ItemTitle>
                                        <Item>Basas</Item>
                                        <Item>Vintas</Item>
                                        <Item>Urbas</Item>
                                        <Item>Pattas</Item>
                                        <Item>Creas</Item>
                                        <Item>Track 6</Item>
                                        <ItemTitle>Style</ItemTitle>
                                        <Item>High Top</Item>
                                        <Item>Low Top</Item>
                                        <Item>Slip-on</Item>
                                        <ItemTitle>Show All Shoes</ItemTitle>
                                    </Column>
                                    <Column>
                                        <>
                                            <ColumnTitle>
                                                Fashion & Accessories
                                            </ColumnTitle>
                                            <ItemTitle>Upper Half</ItemTitle>
                                            <Item>Basic Tee</Item>
                                            <Item>Sweatshirt</Item>
                                            <Item>Hoodie</Item>
                                            <ItemTitle>Accessories</ItemTitle>
                                            <Item>Hat</Item>
                                            <Item>Shoelace</Item>
                                            <Item>Sock</Item>
                                            <Item>Backpacks & Bags</Item>
                                            <ItemTitle>Show All</ItemTitle>
                                        </>
                                    </Column>
                                </DropDownWrapper>
                                <Description>
                                    People often call me <Light>LV7</Light> !
                                </Description>
                            </CategoryDropDown>
                        </CategoryWrapper>
                    </Category>
                    <CategorySeparate />
                    <Category>
                        <CategoryWrapper>SALE OFF</CategoryWrapper>
                    </Category>
                    <CategorySeparate />
                    <Category>
                        <CategoryWrapper className='space'>
                            <Image src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg' />
                        </CategoryWrapper>
                    </Category>
                </Categories>
            </Center>
            <SearchContainer>
                <Search className='icon' />
                <SearchInput placeholder='Search' />
            </SearchContainer>
        </Container>
    );
};

export default Navbar;
