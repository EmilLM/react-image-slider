
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import projects from '../projectsData';
SwiperCore.use([Navigation, EffectCoverflow]);


const Coverflow = () => {
    return (
        <>
            <Swiper effect="coverflow"
                spaceBetween={50}
                speed={800}
                slidesPerView={2}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 50, // Slde rotate in degrees
                    stretch: 0, // Stretch space between slides (in px)
                    depth: 100, // Depth offset in px (slides translate in Z axis)
                    modifier: 1, // Effect multipler
                    slideShadows : true, // Enables slides shadows
                }}
                loop={true}
                navigation
                // autoHeight
                >
                {projects.map( project => {
                    return <SwiperSlide key={project.id} style={{backgroundImage: `url(/assets/${project.src})`}}/>
                    
                })}
            </Swiper>
        </>
    );
}
 
export default Coverflow;