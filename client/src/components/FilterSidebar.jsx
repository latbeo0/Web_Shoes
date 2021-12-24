import styled, { keyframes } from 'styled-components';
import { Close, KeyboardArrowDown } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import {
    dataGender,
    dataCategory,
    dataProductLine,
    dataCollection,
    dataMaterial,
    dataState,
    dataStyle,
    dataSize,
    dataPrice,
    dataColor,
} from '../helpers/data';
import { useNavigate } from 'react-router-dom';

const growth = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
    to {
        transform: scale(1);
        opacity: 1;
        height: 145px;
    }
`;

const scale = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
        height: 145px;
    }
    to {
        transform: scale(0);
        opacity: 0;
        height: 0px;
    }
`;

const GenderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Gender = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    margin: 30px 0;
    cursor: pointer;

    &.checked {
        color: black;
    }

    & + & {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
    }

    &:hover {
        color: rgba(0, 0, 0, 1);
    }
`;

const FilterList = styled.div``;

const FilterItem = styled.div`
    margin-bottom: 15px;

    &.active {
        h1 {
            color: #f15e2c;
        }

        .arrow {
            transform: rotate(0deg);
            color: #f15e2c;
        }

        .sub {
            height: 100%;
            animation: ${growth} 0.2s linear;
        }
    }
`;

const Separate = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px dashed #6f6f6f;
    margin-bottom: 30px;
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin-bottom: 15px;
    cursor: pointer;

    .arrow {
        font-size: 26px;
        transform: rotate(-180deg);
        pointer-events: none;
        transition: all 0.2s linear;
    }
`;

const Name = styled.h1`
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    pointer-events: none;
    margin-right: 10px;
`;

const ItemSubWrapper = styled.div`
    height: 0;
    overflow: hidden;
    transform-origin: 0 top;
    animation: ${scale} 0.2s linear;

    &.normal {
        padding: 15px 0;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-bottom: 30px;
        height: unset;
    }
`;

const ItemSubWrapperSize = styled(ItemSubWrapper)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const ItemSub = styled.div`
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    padding: 6px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;

    .close {
        display: none;
        pointer-events: none;
    }

    &.checked {
        background-color: rgba(0, 0, 0, 0.1);
    }

    &.checked .close {
        display: block;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const ItemSubSize = styled(ItemSub)`
    width: 25%;
    height: 70px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemSubColor = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    margin: 0 8px 8px 0;

    &.checked {
        background-color: #f1f1f1;
    }

    &:hover {
        background-color: #f1f1f1;
    }
`;

const Color = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e1e1e1;
    background-color: ${(props) => props.color};
    pointer-events: none;
`;

const initialState = {
    gender: '',
    category: [],
    attribute: [],
};

const FilterSlidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [filters, setFilters] = useState(initialState);
    const [gender, setGender] = useState('');
    const [category, setCategory] = useState('');
    const [attribute, setAttribute] = useState('');

    useEffect(() => {
        const query = new URLSearchParams(location.search);

        let gender = '';
        if (query.get('gender')) {
            // eslint-disable-next-line
            const qGender = query.get('gender').split(/,/);

            if (qGender.includes('men')) {
                if (qGender.includes('women')) {
                    gender = 'all';
                } else {
                    gender = 'male';
                }
            } else {
                gender = 'female';
            }
        }
        setGender(() => query.get('gender') || '');

        // Category
        const category = [];
        if (query.get('category')) {
            // eslint-disable-next-line
            const qCategory = query.get('category').split(/,/);

            qCategory.forEach((item) => {
                category.push(item.split('_').join(' '));
            });
        }
        setCategory(() => query.get('category') || '');

        // Attribute
        const attribute = [];
        if (query.get('attribute')) {
            // eslint-disable-next-line
            const qAttribute = query.get('attribute').split(/,/);

            qAttribute.forEach((item) => {
                attribute.push(item.split('_').join(' '));
            });
        }
        setAttribute(() => query.get('attribute') || '');

        setFilters({ gender, category, attribute });
    }, [location]);

    const handleGenre = (e) => {
        const value = e.target.innerHTML.toString().toLowerCase();

        let qGender = gender;
        if (value === 'all') {
            qGender = 'men,women';
        } else if (value === 'male') {
            qGender = 'men';
        } else {
            qGender = 'women';
        }

        // console.log(
        //     `/products?gender=${qGender}&category=${category}&attribute=${attribute}`
        // );

        navigate(
            `/products?gender=${qGender}&category=${category}&attribute=${attribute}`
        );
    };

    const handleChangeCategory = (e) => {
        const value = e.target.id.toLowerCase();
        // console.log(value);

        let qCategory = category;
        if (filters.category.includes(value)) {
            // console.log(true);
            const newArr = filters.category.filter((item) => item !== value);

            const categoryTemp = [];
            newArr.forEach((item) => {
                categoryTemp.push(item.replace(' ', '_'));
            });
            qCategory = categoryTemp.join(',');

            // console.log(
            //     `/products?gender=${gender}&category=${qCategory}&attribute=${attribute}`
            // );
            // setFilters((prev) => {
            //     return { ...prev, category: newArr };
            // });
            navigate(
                `/products?gender=${gender}&category=${qCategory}&attribute=${attribute}`
            );
        } else {
            // console.log(false);
            filters.category.push(value);

            const categoryTemp = [];
            filters.category.forEach((item) => {
                categoryTemp.push(item.replace(' ', '_'));
            });
            qCategory = categoryTemp.join(',');

            // console.log(
            //     `/products?gender=${gender}&category=${qCategory}&attribute=${attribute}`
            // );
            // setFilters((prev) => {
            //     return { ...prev };
            // });
            navigate(
                `/products?gender=${gender}&category=${qCategory}&attribute=${attribute}`
            );
        }
    };

    const handleClick = (e) => {
        e.target.parentElement.classList.toggle('active');
    };

    const handleCheck = (e) => {
        e.target.classList.toggle('checked');
        const value = e.target.id.toLowerCase();

        let qAttribute = attribute;
        if (filters.attribute.includes(value)) {
            const newArr = filters.attribute.filter((item) => item !== value);

            const attributeTemp = [];
            newArr.forEach((item) => {
                attributeTemp.push(item.split(' ').join('_'));
            });
            qAttribute = attributeTemp.join(',');

            // console.log(
            //     `/products?gender=${gender}&category=${category}&attribute=${qAttribute}`
            // );
            // setFilters((prev) => {
            //     return { ...prev, attribute: newArr };
            // });
            navigate(
                `/products?gender=${gender}&category=${category}&attribute=${qAttribute}`
            );
        } else {
            filters.attribute.push(value);

            const attributeTemp = [];
            filters.attribute.forEach((item) => {
                attributeTemp.push(item.split(' ').join('_'));
            });
            qAttribute = attributeTemp.join(',');

            // console.log(
            //     `/products?gender=${gender}&category=${category}&attribute=${qAttribute}`
            // );
            // setFilters((prev) => {
            //     return { ...prev };
            // });
            navigate(
                `/products?gender=${gender}&category=${category}&attribute=${qAttribute}`
            );
        }
    };

    return (
        <>
            <GenderWrapper>
                {dataGender.map((item) => (
                    <Gender
                        key={item.id}
                        onClick={handleGenre}
                        className={
                            filters.gender === item.value.toLowerCase() &&
                            'checked'
                        }
                    >
                        {item.value}
                    </Gender>
                ))}
            </GenderWrapper>
            <ItemSubWrapper className='normal'>
                {dataCategory.map((item) => (
                    <ItemSub
                        key={item.id}
                        id={item.value}
                        className={
                            filters.category.includes(
                                item.value.toLowerCase()
                            ) && 'checked'
                        }
                        onClick={handleChangeCategory}
                    >
                        {item.value}
                        <Close className='close' />
                    </ItemSub>
                ))}
            </ItemSubWrapper>
            <FilterList>
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Status</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataState.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Style</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataStyle.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Product Line</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataProductLine.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Price</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataPrice.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Collections</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataCollection.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Size</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapperSize className='sub'>
                        {dataSize.map((item) => (
                            <ItemSubSize
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                            </ItemSubSize>
                        ))}
                    </ItemSubWrapperSize>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Materials</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        {dataMaterial.map((item) => (
                            <ItemSub
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(
                                        item.value.toLowerCase()
                                    ) && 'checked'
                                }
                                onClick={handleCheck}
                            >
                                {item.value}
                                <Close className='close' />
                            </ItemSub>
                        ))}
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Color</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapperSize className='sub'>
                        {dataColor.map((item) => (
                            <ItemSubColor
                                key={item.id}
                                id={item.value}
                                className={
                                    filters.attribute.includes(item.value) &&
                                    'checked'
                                }
                                onClick={handleCheck}
                            >
                                <Color color={item.value} />
                            </ItemSubColor>
                        ))}
                    </ItemSubWrapperSize>
                </FilterItem>
            </FilterList>
        </>
    );
};

export default FilterSlidebar;
