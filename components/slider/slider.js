import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Slider() {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={"/assets/images/display.jpg"}
            objectFit={"cover"}
            //   width="full"
            //   height="auto"
            width={700}
            height={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/assets/images/display.jpg"}
            objectFit={"cover"}
            //   width="full"
            //   height="auto"
            width={700}
            height={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/assets/images/display.jpg"}
            objectFit={"cover"}
            //   width="full"
            //   height="auto"
            width={700}
            height={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/assets/images/display.jpg"}
            objectFit={"cover"}
            //   width="full"
            //   height="auto"
            width={700}
            height={500}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={"/assets/images/display.jpg"}
            objectFit={"cover"}
            //   width="full"
            //   height="auto"
            width={700}
            height={500}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
