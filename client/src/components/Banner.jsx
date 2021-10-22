import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Container = styled.div`
    margin-bottom: 80px;

    .wrapper {
        width: 100vw;
        height: 80vh;
        position: relative;

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
                        <SwiperSlide key={banner.id}>
                            <Image src={banner.url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        </Container>
    );
};

export default Banner;
