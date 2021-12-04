import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiPencil } from 'react-icons/bi';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { TiPlus } from 'react-icons/ti';

export const AddProductContainer = styled.div`
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

export const Form = styled.form``;

export const BodyForm = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
`;

export const FormLeft = styled.div`
    flex: 1;
    margin: 15px 0 30px;
`;

export const FormRight = styled.div`
    flex: 1;
    margin: 15px 0 30px;
`;

export const FormGroup = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    & + & {
        margin-top: 10px;
    }
`;

export const Label = styled.label`
    color: gray;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
`;

export const InputText = styled.input`
    font-size: 1.5rem;
    font-weight: 400;
    outline: none;
    padding: 10px 0 10px 5px;
`;

export const InputTextarea = styled.textarea`
    font-size: 1.5rem;
    font-weight: 400;
    outline: none;
    padding: 10px 0 10px 5px;
    resize: none;
`;

export const GenderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const GenderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 10px 0;
`;

export const LabelGender = styled.label`
    font-size: 1.7rem;
    color: rgba(0, 0, 0, 0.5);
    margin-right: 10px;
`;

export const InputCheckBok = styled.input`
    width: 22px;
    height: 22px;
`;

export const InputSelect = styled.select`
    font-size: 1.7rem;
    padding: 10px 0 10px 5px;
    outline: none;
`;

export const InputOption = styled.option`
    font-size: 1.7rem;
`;

export const InputRadio = styled.input`
    width: 22px;
    height: 22px;
`;

export const LinkR = styled(Link)``;

export const AvatarUploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const AvatarUpload = styled.div`
    position: relative;
    max-width: 200px;
    margin: 0 auto 10px;
`;

export const AvatarUploadPlus = styled(BsFillPlusCircleFill)`
    position: absolute;
    width: 80px;
    height: 80px;
    color: #fed2aa;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

export const AvatarPreviewPlus = styled(AvatarPreview)`
    border: 2px solid #fed2aa;
    cursor: pointer;
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
`;

export const FooterAddProduct = styled.div`
    display: flex;
    align-items: flex-start;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 20%);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-bottom: 15px;
`;

export const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const ColorItem = styled.div`
    width: 120px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px 10px 0;
    border: ${(props) =>
        props.type === 'plus' ? '1px solid #f15e2c' : 'unset'};
    cursor: ${(props) => props.type === 'plus' && 'pointer'};
`;

export const InputColorPlus = styled(BsFillPlusCircleFill)`
    font-size: 2.6rem;
    color: #fff;
    pointer-events: none;
    background-color: #000;
    border-radius: 50%;
`;

export const InputColor = styled.input`
    width: 100%;
    height: 100%;
`;

export const ButtonAddProduct = styled.button`
    width: 100%;
    height: 42px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    border: none;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #f15e2c;
    margin: 15px;
    cursor: pointer;
`;

export const DetailItemContainer2 = styled.div``;

export const DetailContainer2 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ColorContainer2 = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px 15px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    position: relative;
    margin-bottom: 20px;
`;

export const SizeContainer2 = styled.div``;

export const SizeItemContainer2 = styled.div`
    padding: 20px 10px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    position: relative;

    & + & {
        margin-top: 20px;
    }
`;

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 7px;
    right: 7px;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    /* background-color: #ff0000; */
`;

export const CloseIcon = styled(IoClose)`
    position: absolute;
    width: 100%;
    height: 100%;
    color: #f58d69;
    pointer-events: none;
`;

export const InputColorWrapper = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

export const InputColor2 = styled.input`
    position: absolute;
    width: 120%;
    height: 120%;
    top: -5px;
    left: -5px;

    appearance: unset;
    padding: 0;
    border: none;
    color: unset;
    background-color: unset;
    cursor: unset;

    letter-spacing: unset;
    word-spacing: unset;
    line-height: unset;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: block;
    text-align: unset;
    text-rendering: unset;
`;

export const InputSize2 = styled.input`
    width: 120px;
    height: 50px;
    outline: none;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    font-weight: 500;
    outline: none;
    padding: 0 10px;
    text-align: center;
    margin: 0 10px;
`;

export const SizeItemPlusContainer = styled.div`
    margin-top: 20px;
`;

export const InputSizePlus2 = styled.div`
    width: 300px;
    height: 50px;
    outline: none;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
    background-color: #fed2aa;
    cursor: pointer;
    margin-top: 20px;
    position: relative;
`;

export const InputColorPlusIcon = styled(TiPlus)`
    font-size: 2.6rem;
    color: #fff;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
