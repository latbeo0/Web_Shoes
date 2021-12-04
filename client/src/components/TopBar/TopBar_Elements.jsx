import styled from 'styled-components';
import { VscBell } from 'react-icons/vsc';
import { MdLanguage, MdOutlineSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const TopBarContainer = styled.div`
    width: 100%;
    height: 125px;
    background-color: white;
    position: sticky;
    top: 0;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    z-index: 99;
`;

export const TopBarWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 100px;
`;

export const TopLeft = styled.div`
    width: 100px;
    height: 75%;
`;

export const LinkR = styled(Link)`
    color: #000;
    text-decoration: none;
`;

export const BrandWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Brand = styled.img`
    height: 100%;
`;

export const TopCenter = styled.div``;

export const NameBrand = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: #f15e2c;
    cursor: pointer;
    text-transform: uppercase;
`;

export const TopRight = styled.div`
    display: flex;
    align-items: center;
`;

export const TopIconContainer = styled.div`
    & + & {
        margin-left: 25px;
    }
`;

export const TopIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    color: #555;
`;

export const NotifyIcon = styled(VscBell)`
    font-size: 3rem;
`;

export const LanguageIcon = styled(MdLanguage)`
    font-size: 3rem;
`;

export const SettingIcon = styled(MdOutlineSettings)`
    font-size: 3rem;
`;

export const TopIconBadge = styled.span`
    width: 25px;
    height: 25px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;

export const AvatarWrapper = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 50px;
    overflow: hidden;
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
