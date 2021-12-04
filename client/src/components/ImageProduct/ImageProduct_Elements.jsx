import styled from 'styled-components';
import { BiPencil } from 'react-icons/bi';

export const AvatarUpload = styled.div`
    position: relative;
    max-width: 200px;
    margin: 0 auto 10px;
`;

export const AvatarEdit = styled.div`
    position: absolute;
    right: 10px;
    z-index: 1;
    top: 10px;
`;

export const InputAvatar = styled.input`
    display: none;
`;

export const LabelAvatar = styled.label`
    width: 34px;
    height: 34px;
    margin-bottom: 0;
    border-radius: 100%;
    background: #ffffff;
    border: 1px solid transparent;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    font-weight: normal;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #f1f1f1;
        border-color: #d6d6d6;
    }
`;

export const PencilIcon = styled(BiPencil)`
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.5);
`;

export const AvatarPreview = styled.div`
    width: 192px;
    height: 192px;
    position: relative;
    /* border-radius: 100%; */
    border: 6px solid #f8f8f8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
`;
