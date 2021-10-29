import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Navigation]);

const Container = styled.div`
    height: 50px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .wrapper {
        width: 990px;
        text-align: center;

        .swiper-button-next,
        .swiper-button-prev {
            color: #808080;

            &:after {
                font-size: 14px;
                font-weight: 700;
            }

            &:hover {
                color: #000;
            }
        }
    }

    @media only screen and (max-width: 991px) {
        height: 70px;

        .wrapper {
            width: 100%;

            .swiper-button-next,
            .swiper-button-prev {
                display: none;
            }
        }
    }
`;

const Text = styled.span`
    text-transform: uppercase;
    font-style: italic;
    font-size: 15px;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-weight: 400;
    cursor: pointer;

    @media only screen and (max-width: 991px) {
        font-size: 22px;
    }
`;

const Announcement = () => {
    const announcements = [
        {
            id: 1,
            title: 'Free ship with bill from 800k',
        },
        {
            id: 2,
            title: 'Buy more pay less - Applicable when purchasing accessories',
        },
        {
            id: 3,
            title: 'Buy 2 get 10% off - Applies to all products',
        },
        {
            id: 4,
            title: 'Half year warranty',
        },
    ];

    return (
        <Container>
            <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className='wrapper'
            >
                {announcements.map((announcement) => (
                    <SwiperSlide key={announcement.id}>
                        <Text>{announcement.title}</Text>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Announcement;
