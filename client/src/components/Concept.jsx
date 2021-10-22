import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

const Container = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 100px;
    gap: 40px;

    .wrapper {
        .swiper-pagination {
            color: transparent;
            top: 300px;
            bottom: 0;

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
const Row = styled.div`
    flex: 1;
    overflow: hidden;
`;
const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
`;

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
`;
const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    cursor: pointer;
    margin: 40px 0 20px;

    &:hover {
        color: #f15e2c;
    }
`;

const Description = styled.h2`
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0px;
`;

const Concept = () => {
    const concepts = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/9899496/pexels-photo-9899496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            title: 'Concept 1',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime, veniam molestiae perspiciatis libero nihil nesciunt odio commodi laudantium quas delectus velit, ratione et deserunt repudiandae? Consequatur eius tenetur ad.',
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            title: 'Concept 2',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit, incidunt nobis atque esse nam corrupti illum non, amet eum sint totam, repellendus itaque eligendi vitae ullam voluptatum accusamus quas?',
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
            <Row>
                <Swiper loop={true} pagination={pagination} className='wrapper'>
                    {concepts.map((concept) => (
                        <SwiperSlide key={concept.id}>
                            <ImageBox>
                                <Image src={concept.img} />
                            </ImageBox>
                            <Title>{concept.title}</Title>
                            <Description>{concept.desc}</Description>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Row>
            <Row>
                <ImageBox>
                    <Image src='https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                </ImageBox>
                <Title>OUTLET SALE</Title>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto quaerat mollitia delectus natus voluptatem dolore
                    rem laborum labore nostrum perspiciatis impedit possimus
                    atque unde dolor, qui iusto saepe. Natus, nisi!
                </Description>
            </Row>
        </Container>
    );
};
export default Concept;
