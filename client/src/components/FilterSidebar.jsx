import styled, { keyframes } from 'styled-components';
import { Close, KeyboardArrowDown } from '@material-ui/icons';
import { useState } from 'react';

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
    padding: 8px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

const FilterSlidebar = () => {
    const [gender, setGender] = useState('');

    const handleGenre = (e) => {
        setGender(e.target.innerHTML.toString());
    };

    const handleClick = (e) => {
        e.target.parentElement.classList.toggle('active');
    };

    const handleCheck = (e) => {
        e.target.classList.toggle('checked');
    };

    return (
        <>
            <GenderWrapper>
                <Gender
                    onClick={handleGenre}
                    className={gender === 'All' && 'checked'}
                >
                    All
                </Gender>
                <Gender
                    onClick={handleGenre}
                    className={gender === 'Male' && 'checked'}
                >
                    Male
                </Gender>
                <Gender
                    onClick={handleGenre}
                    className={gender === 'Female' && 'checked'}
                >
                    Female
                </Gender>
            </GenderWrapper>
            <ItemSubWrapper className='normal'>
                <ItemSub onClick={handleCheck}>
                    Shoes
                    <Close className='close' />
                </ItemSub>
                <ItemSub onClick={handleCheck}>
                    Up
                    <Close className='close' />
                </ItemSub>
                <ItemSub onClick={handleCheck}>
                    Accessory
                    <Close className='close' />
                </ItemSub>
            </ItemSubWrapper>
            <FilterList>
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Status</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            Limited Edition
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Online Only
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Sale off
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Best Seller
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            New Arrival
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Style</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            Low Top
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            High Top
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Slip-on
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Mule
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Brand</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            Basas
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Vintas
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Urbas
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Creas
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Graphic Tee
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Hoodie
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Sweatshirt
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Socks
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Hat
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Track 6
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Basic Tee
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Shoelaces
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Price</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            500k - 599k
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            {'>'} 600k
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            400k - 499k
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            300k - 399k
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            200k - 299k
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            {'<'} 200k
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Collections</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            Suede
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Temperate
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            LV7 x Doraemon 50 years
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Irrelevant
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Track 6 Unnamed
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            DiscoverYou
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Size</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapperSize className='sub'>
                        <ItemSubSize onClick={handleCheck}>35</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>36</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>37</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>38</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>39</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>40</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>41</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>42</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>43</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>44</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>45</ItemSubSize>
                        <ItemSubSize onClick={handleCheck}>46</ItemSubSize>
                    </ItemSubWrapperSize>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Materials</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapper className='sub'>
                        <ItemSub onClick={handleCheck}>
                            Canvas
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Suede
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Synthetic Leather
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Leather
                            <Close className='close' />
                        </ItemSub>
                        <ItemSub onClick={handleCheck}>
                            Cotton
                            <Close className='close' />
                        </ItemSub>
                    </ItemSubWrapper>
                </FilterItem>
                <Separate />
                <FilterItem className='active'>
                    <Label onClick={handleClick}>
                        <Name>Color</Name>
                        <KeyboardArrowDown className='arrow' />
                    </Label>
                    <ItemSubWrapperSize className='sub'>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#E7D3AD'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#F5F5DC'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#455851'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#574D35'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#A49C8E'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#006964'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#DDBE78'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#999999'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#0E2366'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#624018'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#F4F4F4'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#588732'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#6633CC'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#FF80AA'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#FFCC00'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#FE6702'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#C10013'} />
                        </ItemSubColor>
                        <ItemSubColor onClick={handleCheck}>
                            <Color color={'#000000'} />
                        </ItemSubColor>
                    </ItemSubWrapperSize>
                </FilterItem>
            </FilterList>
        </>
    );
};

export default FilterSlidebar;
