import { Container, Text } from './Announcement_Elements';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { announcements } from './data';

SwiperCore.use([Autoplay, Navigation]);

const Announcement = () => {
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
