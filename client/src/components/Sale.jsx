import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useState } from 'react';
import { useEffect } from 'react';

SwiperCore.use([Navigation]);

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 100px;

    .mySwiper {
        display: block;
        .mySwiperSlide {
            display: flex;
        }

        .swiper-button-prev,
        .swiper-button-next {
            top: calc(50% - 45px);
            color: rgba(0, 0, 0, 0.3);
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
            color: rgba(0, 0, 0, 1);
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

const Header = styled.h1`
    font-size: 34px;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 2px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 38px;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
        font-size: 34px;
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 575px) {
        font-size: 32px;

        margin-bottom: 20px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 285px;
    margin-bottom: 16px;

    @media only screen and (max-width: 991px) {
        height: 100%;
        padding-top: 100%;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #f15e2c;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 20px;
    }
`;

const Description = styled.h2`
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0px;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 18px;
    }
`;

const Price = styled.h3`
    font-size: 18px;
    font-weight: 700;

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        font-size: 20px;
    }
`;

export default function App() {
    const products = [
        {
            id: 1,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Giay_Superstar_DJen_EG4959_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 2,
            img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARERAQEhASEg0SDxIRERASEhASExAQFhIWFxcVFhUaHSggGBolGxUVIjEhJSkrLi4vFyA2ODMtQyguLisBCgoKDg0ODw8PDysZFR4rNy0rKzc3Ny0rKystLSsrNzc3Ky0rKysrLSs3NzcrKysrNysrKzcrKy0rKys3KysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xAA6EAACAQICBgcGAwkBAAAAAAAAAQIDEQQhBQYSMUFREyJSYXGR0QcUMoGhsUKS8CMkM1NicsHh8YL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDsQAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUbAqCNSWynJ7l+rLmyFHEQntKMoycXaSTT2Xa9nyyYF0AAAAAAAAAAAAAAAAAAAAAAAAAAAABbqV4xcYuSUpX2Y3V5W32XG115k0zkeuWsEo6dwSTahQxNCj8qklGo/Ko1/5OtVMmgJgAAUjnK3LP58Cpj06jjVlFptTipRfC6tFru4P5gZNWkpWvwaa5XW664mt0foeNGpOabbm7yk5Ntu7dvC8pPNu7l3I2LqxT6zs+F7pPwb3lxrklvCrUkyqJVVfPvX3RWcE1Zq6CIAhSpNccrXs82vmST4CCoAAAAAAAAAAAAAAAAAAAAAWsVXVOE6j+GEJTfhFNv7F01+n6Snhq1OV9mpB03ZtO0snZruYHzzrjp+WKlSls7FSntyck73qSkpbSyyzXG513Uj2i4bGwhTrTjRxySUoTezGrLtU5PJ37O9d+859pL2a4xz/YyhOD3Oo3CSXfZNPxy8D1epfswpYeUa+Lca9ZZxpJXpQfBu/wAb+SXiFdPTT/0UdubLEacOVv7W4/RE9hdqXmKjWabWKnsww81TV7zrSs7LlGPF+XiZOi8K6cetUnUm85VKjvKT+yXcjJ2V/wBdySFIvqRDoI/hvH+12Xlu+gTPM6+a2x0fQ6uzLF1bxoU3w51JLsr6uy8IqunNbVhq6w6h7w1DarbLUHRT+FN5qUmru2Vla+9GdofWnDYlumtuFWMNqVOcGtmF7XcleKV+84hozH16lRU4bVXE1qmV3eVWrLNyk/Nt7kl3HbtXtE0tH4aUqlSPSWdXFYiXVTaV3nwhFXSXLvbA3dNppZp8muRSMVdr57uH/Tkek9Y62JxEsRRqTw9GK2aMINwcoXv0lVL4m+T3LLnf2eo+Ox+IpSrVpQlQbtQlKGzUrJb53jkoXyXVu7N8hR6Z03fLda5FytkzUY3W3B0a7w9ar0daKUpZOUEnuTlFOztnZ2e7mbbDYylWip0qkKsODhKMk+66LUiaaKidJPmnbet6IwhJJXe07LPdmBIFLlQAAAAAAAAAAAAAAYOmH1F/evszOMHS8b0/CSf3AtUIpovxjbwMbCSyRmwIqqiVsViSAgVRItYitGnGU5yUacYuUpN2UYpXbbAw9YNNUsFh6mIqvqQWUV8VSb+GEe9s+dtO6ZrYyvUxNaXXluX4adNboR7l9c2bbXvWmWka91dYSk2qEHlfnUku0/osuZ6L2V6ndNOOPrx/d4S/d4NfxasX/Ea7MWsubXdmHqfZdqf7pT96rwtjaserF78PRf4f75b38lwd/N+1DXJV6jwNCX7vTl+3mn/FqxfwJ8Yxaz5td2e/9qWuXutP3ShL97qw68lvoUnlfum87ct/I5Lq7oetjK9PDUV15O8pP4adNPrVJdyT+baXED1uoegp6QquMrrA0mveJK623vVGLXF73yXijp+uGsUNH0Ixgo+81F0eGpW6sbK220t0Iq3jkuJOHumicDv2cNQhm8turUf3nKX35I4dpjWGri8RUxNV2lLKMb9WlSXwwj3Le3xbbA3Koym0ltVsTWqWV2tutWm+L823uST5HWtVNV6WCoqDSniJ9atWWTlPlF71BbkvnvbND7NNWpUYLGV0/eKkLUaclnQovi081OWTfJWXM94mBZlTlHOLbt+CWd+5S338bk6Ti0nG1n1uW/iXDHitmbX4ZXmu6V+svqn82BcaIuBOUePEqBas+fmFLmXLEZIIAjF+ZIoAAAAAABiaQjW2f2TSfFWV/qBlmv0zU2YwunKO1mk7Xyy4o008biou0pST70vQe9VarUZSur33JZgbOhWp2+Ca8IyfqZUa0f614wkvuixQiZUfAKqqsMus/J+hPpYc35P0Ix/zye4kn+swh0sO0aHW7Qix9JUFjOgpt3moxjLpLbk+ssk87HoABy7C+yOCqQc8dGpRUk5wjR6OU4cYqXSPZvuv4nSK1GUKLjh40tuFPZowk3CmmlaKbim1FZbkZDiuS8kR6KPZXkgOLaU9m+l6lSpWqKlWrVJOU5RrRvJvltqOXJHRNQdU1o+h1knjKqjKvNZ2tupxfZjd+Lu+J6Xo1uz+UpL/ACUcP6pL5p/cDjPtKxekMbX2I4LGRwVCTVO+GxCVSe51X1bc0u7xZd9mWpU6tb3nFUpQw9GS2KVSEoutWVmm4yXwRyfe7LgzsNpdp+SKva7X0/2RV5MqmWE5c1+V+pJOXNX8H6gX9otYjcmt8WpL7PLjk2U63NeT9RaXa8kUXVIje3gR2e9jYX6zAq6n6RFt+H1ZVstRrpu0Xd/QIuQWfyJkYx8yQAAAAAAAAEalNSVmrrvNfX0TF5wezLvzRsgBrqeGqx4xfzfoX4qp2fqjKAGOpT7H1j6ktuXYfnH1LwAs7cuw/OPqU25dh+cfUvgDHdSf8t+cfUp0k/5b84+pkgDF6Sf8uX09SnSy7EvIywBidK+xL8rKdM+xP8kvQzABiKu+xP8AJL0JKv8A0z/LIyQBYVZ9mX5WOllwhJ+S+7L4AxnUq8Kf5pRX2uW5U8RL8dOC7lKb83b7GaAMKOjk851Jzfe0l5IyqdKMdysTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 3,
            img: 'data:image/jpeg;base64,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',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 4,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4beec42baa874b079306abd701074f51_9366/ULTRABOOST_DNA_CTY_-_HO_CHI_MINH_Grey_FZ4864.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 5,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Giay_co_lung_Forum_trang_FY4976_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 6,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 7,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae99cef75be04e089032ab25010d4dfa_9366/4D_Run_1.0_trang_EG6264_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 8,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49e9743bc8574c79b765a913009cdbc2_9366/Giay_Falcon_trang_B28128_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 9,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Giay_co_lung_Forum_trang_FY4976_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 10,
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 11,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae99cef75be04e089032ab25010d4dfa_9366/4D_Run_1.0_trang_EG6264_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
        {
            id: 12,
            img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/49e9743bc8574c79b765a913009cdbc2_9366/Giay_Falcon_trang_B28128_01_standard.jpg',
            title: 'Adidas H-1000',
            price: 500,
        },
    ];

    const updateWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    const [windowWidth, setWindowWidth] = useState(() => updateWidth);
    const [size, setSize] = useState([4, 30]);

    useEffect(() => {
        window.addEventListener('resize', updateWidth);

        if (windowWidth < 992) {
            setSize([3, 15]);
        } else {
            setSize([4, 30]);
        }

        return () => window.removeEventListener('resize', updateWidth);
    }, [windowWidth]);

    return (
        <Container>
            <Header>Best Seller</Header>
            <Swiper
                slidesPerView={size[0]}
                spaceBetween={size[1]}
                slidesPerGroup={size[0]}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation
                className='mySwiper'
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className='mySwiperSlide'>
                        <Wrapper>
                            <ImageBox>
                                <Image src={product.img} />
                            </ImageBox>
                            <Title>{product.title}</Title>
                            <Description>White</Description>
                            <Price>$ {product.price}</Price>
                        </Wrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}
