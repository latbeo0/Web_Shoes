import styled from 'styled-components';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const ListProductContainer = styled.div`
    flex: 4;
    margin: 0 30px;
`;

export const Header = styled.div`
    font-size: 2.4rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #f15e2c;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 30px 0 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ListProductBody = styled.div`
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
`;

export const TableContainer = styled.div`
    width: 100%;
    /* overflow-x: scroll; */
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const HeaderTable = styled.thead``;

export const RowHeaderTable = styled.tr`
    height: 70px;
`;

export const ItemHeaderTable = styled.th`
    font-size: 1.5rem;
`;

export const BodyTable = styled.tbody``;

export const RowBodyTable = styled.tr``;

export const ItemBodyTable = styled.td`
    font-size: 1.5rem;
    height: 80px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemBodyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageProduct = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 10px;
`;

export const TitleProduct = styled.span`
    font-size: 1.5rem;
    width: 200px;
    overflow: hidden;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

export const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Stock = styled.span`
    font-size: 1.5rem;
`;

export const StockFalse = styled(Stock)`
    color: #ff0000;
`;

export const StockTrue = styled(Stock)`
    color: #0f0;
`;

export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ActionItem = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const EditIcon = styled(FiEdit2)`
    font-size: 1.5rem;
    cursor: pointer;
`;

export const DeleteEdit = styled(AiOutlineDelete)`
    font-size: 1.5rem;
    cursor: pointer;
`;

export const LinkR = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
