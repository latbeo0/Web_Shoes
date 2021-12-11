import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarTitle,
    SidebarList,
    LinkR,
    SidebarListItem,
    SidebarItemWrapper,
    IconWrapper,
    SidebarItemName,
    HomeIcon,
    AnalyticIcon,
    ReportIcon,
    ProductsIcon,
    AddProductIcon,
    CategoryIcon,
    AddCategory,
    ListUserIcon,
} from './Sidebar_Elements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <LinkR to='/admin'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <HomeIcon />
                                    </IconWrapper>
                                    <SidebarItemName>Home</SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                        <LinkR to='#'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <AnalyticIcon />
                                    </IconWrapper>
                                    <SidebarItemName>Analytics</SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                        <LinkR to='#'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <ReportIcon />
                                    </IconWrapper>
                                    <SidebarItemName>Reports</SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Products</SidebarTitle>
                    <SidebarList>
                        <LinkR to='/admin/list_product'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <ProductsIcon />
                                    </IconWrapper>
                                    <SidebarItemName>
                                        Product List
                                    </SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                        <LinkR to='/admin/add_product'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <AddProductIcon />
                                    </IconWrapper>
                                    <SidebarItemName>
                                        Add Product
                                    </SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Users</SidebarTitle>
                    <SidebarList>
                        <LinkR to='/admin/list_user'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <ListUserIcon />
                                    </IconWrapper>
                                    <SidebarItemName>User List</SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Categories</SidebarTitle>
                    <SidebarList>
                        <LinkR to='#'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <CategoryIcon />
                                    </IconWrapper>
                                    <SidebarItemName>
                                        Category List
                                    </SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                        <LinkR to='/admin/add_category'>
                            <SidebarListItem>
                                <SidebarItemWrapper>
                                    <IconWrapper>
                                        <AddCategory />
                                    </IconWrapper>
                                    <SidebarItemName>
                                        Add Category
                                    </SidebarItemName>
                                </SidebarItemWrapper>
                            </SidebarListItem>
                        </LinkR>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
