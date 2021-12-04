import { useSelector } from 'react-redux';
import {
    TopBarContainer,
    TopBarWrapper,
    TopLeft,
    LinkR,
    BrandWrapper,
    Brand,
    TopCenter,
    NameBrand,
    TopRight,
    TopIconContainer,
    TopIconWrapper,
    NotifyIcon,
    LanguageIcon,
    SettingIcon,
    TopIconBadge,
    AvatarWrapper,
    Avatar,
} from './TopBar_Elements';

const TopBar = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <TopBarContainer>
            <TopBarWrapper>
                <TopLeft>
                    <LinkR to='/'>
                        <BrandWrapper>
                            <Brand src='https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg' />
                        </BrandWrapper>
                    </LinkR>
                </TopLeft>
                <TopCenter>
                    <LinkR to='/admin'>
                        <NameBrand>Admin Shop</NameBrand>
                    </LinkR>
                </TopCenter>
                <TopRight>
                    <TopIconContainer>
                        <LinkR to='#'>
                            <TopIconWrapper>
                                <NotifyIcon />
                                <TopIconBadge>2</TopIconBadge>
                            </TopIconWrapper>
                        </LinkR>
                    </TopIconContainer>
                    <TopIconContainer>
                        <LinkR to='#'>
                            <TopIconWrapper>
                                <LanguageIcon />
                                <TopIconBadge>22+</TopIconBadge>
                            </TopIconWrapper>
                        </LinkR>
                    </TopIconContainer>
                    <TopIconContainer>
                        <LinkR to='#'>
                            <TopIconWrapper>
                                <SettingIcon />
                            </TopIconWrapper>
                        </LinkR>
                    </TopIconContainer>
                    <LinkR to='#'>
                        <AvatarWrapper>
                            <Avatar src={auth.avatar} />
                        </AvatarWrapper>
                    </LinkR>
                </TopRight>
            </TopBarWrapper>
        </TopBarContainer>
    );
};

export default TopBar;
