import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscHome, VscGraphLine, VscPieChart } from 'react-icons/vsc';
import { BsBag, BsBagPlus, BsFolder, BsFolderPlus } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi';

export const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 125px);
    /* background-color: rgb(251, 251, 255); */
    position: sticky;
    top: 50px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
`;

export const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`;

export const SidebarMenu = styled.div`
    margin-bottom: 10px;
`;

export const SidebarTitle = styled.h3`
    font-size: 1.3rem;
    color: rgb(187, 186, 186);
    margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`;

export const LinkR = styled(Link)`
    color: #000;
    text-decoration: none;
`;

export const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 5px;

    &:hover {
        background-color: #ffe194;
    }

    & + & {
        margin-top: 7px;
    }
`;

export const SidebarItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconWrapper = styled.div`
    margin: 0 10px;
`;

export const SidebarItemName = styled.div`
    font-size: 1.7rem;
    font-weight: 400;
`;

export const HomeIcon = styled(VscHome)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const AnalyticIcon = styled(VscGraphLine)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const ReportIcon = styled(VscPieChart)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const ProductsIcon = styled(BsBag)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const AddProductIcon = styled(BsBagPlus)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const CategoryIcon = styled(BsFolder)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const AddCategory = styled(BsFolderPlus)`
    margin-right: 5px;
    font-size: 2.4rem;
`;

export const ListUserIcon = styled(HiOutlineUsers)`
    margin-right: 5px;
    font-size: 2.4rem;
`;
