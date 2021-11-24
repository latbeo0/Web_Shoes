import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Container = styled.div`
    width: 100vw;
    margin-bottom: 100px;

    .wrapper {
        .imgBx {
            position: relative;
            width: 100vw;
            height: 82vh;

            @media only screen and (min-width: 992px) and (max-width: 1199px) {
                height: 600px;
            }

            @media only screen and (min-width: 768px) and (max-width: 991px) {
                height: 430px;
            }

            @media only screen and (min-width: 576px) and (max-width: 767px) {
                height: 300px;
            }

            @media only screen and (max-width: 575px) {
                height: 225px;
            }
        }

        .swiper-pagination {
            color: transparent;

            .swiper-pagination-bullet {
                border-radius: 0;
                width: 40px;
                height: 5px;
                opacity: 1;
                background-color: #d3d3d3;
            }

            .swiper-pagination-bullet-active {
                opacity: 0.9;
                background-color: #f15e2c;
            }
        }
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
        margin-bottom: 80px;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 575px) {
        margin-bottom: 20px;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Banner = () => {
    const banners = [
        {
            id: 1,
            url: 'https://images.pexels.com/photos/9638823/pexels-photo-9638823.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            id: 2,
            url: 'https://images.pexels.com/photos/5061071/pexels-photo-5061071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            id: 3,
            url: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
    ];

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Container>
            <>
                <Swiper loop={true} pagination={pagination} className='wrapper'>
                    {banners.map((banner) => (
                        <SwiperSlide key={banner.id} className='imgBx'>
                            <Image src={banner.url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </Container>
    );
};

export default Banner;
