import {
    NavbarContainer,
    NavbarBrand,
    BrandLink,
    BrandWrapper,
    Brand,
    NavbarList,
    NavbarItem,
    NavbarItemSeparate,
    NavbarItemContainer,
    NavbarItemLink,
    NavbarItemTitle,
    ArrowWrapper,
    Arrow,
    NavbarItemImage,
    NavbarSubMenu,
    NavbarItemImageWrapper,
    NavbarSubItemImage,
    SubItemImageLink,
    SubItemImageWrapper,
    SubItemImage,
    SubItemImageTitle,
    SubItemFooter,
    SubItemDescription,
    SubItemNameBrand,
    NavbarItemWrapper,
    NavbarSubItem,
    SubItemHighlight,
    SubItemTitle,
    SubItemName,
    SubItemBlank,
    SubItemLink,
    NavbarSearch,
    SearchWrapper,
    SearchIcon,
    SearchInput,
} from './Navbar_Elements';
import { dataImage, data } from './data';
import { Fragment } from 'react';

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarBrand>
                <BrandLink to='/'>
                    <BrandWrapper>
                        <Brand src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg' />
                    </BrandWrapper>
                </BrandLink>
            </NavbarBrand>
            <NavbarList>
                <NavbarItem>
                    <NavbarItemContainer>
                        <NavbarItemLink to='/products'>
                            <NavbarItemTitle>Products</NavbarItemTitle>
                            <ArrowWrapper className='arrowWrapper'>
                                <Arrow className='arrow' />
                            </ArrowWrapper>
                        </NavbarItemLink>
                        <NavbarSubMenu className='sub'>
                            <NavbarItemImageWrapper>
                                {dataImage.map((item) => (
                                    <NavbarSubItemImage key={item.id}>
                                        <SubItemImageLink to={item.link}>
                                            <SubItemImageWrapper>
                                                <SubItemImage src={item.img} />
                                            </SubItemImageWrapper>
                                            <SubItemImageTitle>
                                                {item.title}
                                            </SubItemImageTitle>
                                        </SubItemImageLink>
                                    </NavbarSubItemImage>
                                ))}
                            </NavbarItemImageWrapper>
                            <SubItemFooter>
                                <SubItemDescription>
                                    People call me{' '}
                                    <SubItemNameBrand>LV7</SubItemNameBrand> !
                                </SubItemDescription>
                            </SubItemFooter>
                        </NavbarSubMenu>
                    </NavbarItemContainer>
                </NavbarItem>
                <NavbarItemSeparate />
                <NavbarItem>
                    <NavbarItemContainer>
                        <NavbarItemLink to='/products?gender=men'>
                            <NavbarItemTitle>Male</NavbarItemTitle>
                            <ArrowWrapper className='arrowWrapper'>
                                <Arrow className='arrow' />
                            </ArrowWrapper>
                        </NavbarItemLink>
                        <NavbarSubMenu className='sub'>
                            <NavbarItemWrapper>
                                {data.map((dt) =>
                                    dt.separate ? (
                                        <NavbarSubItem
                                            key={dt.id}
                                            separate='dash'
                                        />
                                    ) : (
                                        <NavbarSubItem key={dt.id}>
                                            <SubItemLink to='#'>
                                                <SubItemHighlight>
                                                    {dt.highlight}
                                                </SubItemHighlight>
                                            </SubItemLink>
                                            {dt.status && (
                                                <>
                                                    <SubItemBlank />
                                                    {dt.status.map((st) => (
                                                        <SubItemLink
                                                            key={st.id}
                                                            to={st.link}
                                                        >
                                                            <SubItemName>
                                                                {st.value}
                                                            </SubItemName>
                                                        </SubItemLink>
                                                    ))}
                                                </>
                                            )}
                                            {dt.list.map((lt) => (
                                                <Fragment key={lt.id}>
                                                    <SubItemBlank />
                                                    <SubItemLink to={lt.link}>
                                                        <SubItemTitle>
                                                            {lt.title}
                                                        </SubItemTitle>
                                                    </SubItemLink>
                                                    {lt.items.map((item) => (
                                                        <SubItemLink
                                                            key={item.id}
                                                            to={item.link}
                                                        >
                                                            <SubItemName>
                                                                {item.value}
                                                            </SubItemName>
                                                        </SubItemLink>
                                                    ))}
                                                </Fragment>
                                            ))}
                                            <SubItemBlank />
                                            {dt.footer && (
                                                <SubItemLink
                                                    to={dt.footer.link}
                                                >
                                                    <SubItemTitle>
                                                        {dt.footer.value}
                                                    </SubItemTitle>
                                                </SubItemLink>
                                            )}
                                        </NavbarSubItem>
                                    )
                                )}
                            </NavbarItemWrapper>
                            <SubItemFooter>
                                <SubItemDescription>
                                    People call me{' '}
                                    <SubItemNameBrand>LV7</SubItemNameBrand> !
                                </SubItemDescription>
                            </SubItemFooter>
                        </NavbarSubMenu>
                    </NavbarItemContainer>
                </NavbarItem>
                <NavbarItemSeparate />
                <NavbarItem>
                    <NavbarItemContainer>
                        <NavbarItemLink to='/products?gender=women'>
                            <NavbarItemTitle>Female</NavbarItemTitle>
                            <ArrowWrapper className='arrowWrapper'>
                                <Arrow className='arrow' />
                            </ArrowWrapper>
                        </NavbarItemLink>
                        <NavbarSubMenu className='sub'>
                            <NavbarItemWrapper>
                                {data.map((dt) =>
                                    dt.separate ? (
                                        <NavbarSubItem
                                            key={dt.id}
                                            separate='dash'
                                        />
                                    ) : (
                                        <NavbarSubItem key={dt.id}>
                                            <SubItemLink to='#'>
                                                <SubItemHighlight>
                                                    {dt.highlight}
                                                </SubItemHighlight>
                                            </SubItemLink>
                                            {dt.status && (
                                                <>
                                                    <SubItemBlank />
                                                    {dt.status.map((st) => (
                                                        <SubItemLink
                                                            key={st.id}
                                                            to={st.link}
                                                        >
                                                            <SubItemName>
                                                                {st.value}
                                                            </SubItemName>
                                                        </SubItemLink>
                                                    ))}
                                                </>
                                            )}
                                            {dt.list.map((lt) => (
                                                <Fragment key={lt.id}>
                                                    <SubItemBlank />
                                                    <SubItemLink to={lt.link}>
                                                        <SubItemTitle>
                                                            {lt.title}
                                                        </SubItemTitle>
                                                    </SubItemLink>
                                                    {lt.items.map((item) => (
                                                        <SubItemLink
                                                            key={item.id}
                                                            to={item.link}
                                                        >
                                                            <SubItemName>
                                                                {item.value}
                                                            </SubItemName>
                                                        </SubItemLink>
                                                    ))}
                                                </Fragment>
                                            ))}
                                            <SubItemBlank />
                                            {dt.footer && (
                                                <SubItemLink
                                                    to={dt.footer.link}
                                                >
                                                    <SubItemTitle>
                                                        {dt.footer.value}
                                                    </SubItemTitle>
                                                </SubItemLink>
                                            )}
                                        </NavbarSubItem>
                                    )
                                )}
                            </NavbarItemWrapper>
                            <SubItemFooter>
                                <SubItemDescription>
                                    People call me{' '}
                                    <SubItemNameBrand>LV7</SubItemNameBrand> !
                                </SubItemDescription>
                            </SubItemFooter>
                        </NavbarSubMenu>
                    </NavbarItemContainer>
                </NavbarItem>
                <NavbarItemSeparate />
                <NavbarItem>
                    <NavbarItemContainer>
                        <NavbarItemLink to='#'>
                            <NavbarItemTitle>Sale Off</NavbarItemTitle>
                            <ArrowWrapper arrow={'none'}></ArrowWrapper>
                        </NavbarItemLink>
                    </NavbarItemContainer>
                </NavbarItem>
                <NavbarItemSeparate />
                <NavbarItem>
                    <NavbarItemContainer>
                        <NavbarItemLink to='#'>
                            <NavbarItemImage src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg' />
                        </NavbarItemLink>
                    </NavbarItemContainer>
                </NavbarItem>
            </NavbarList>
            <NavbarSearch>
                <SearchWrapper>
                    <SearchIcon />
                </SearchWrapper>
                <SearchInput placeholder='Search ...' />
            </NavbarSearch>
        </NavbarContainer>
    );
};

export default Navbar;
