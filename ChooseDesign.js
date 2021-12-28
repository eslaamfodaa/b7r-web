import Image from "next/image";
import image1 from "../../public/assets/1.jpg";
import image2 from "../../public/assets/2.jpg";
import image3 from "../../public/assets/3.jpg";
import image4 from "../../public/assets/4.jpg";
import image5 from "../../public/assets/5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
const Choose = () => {
  return (
    <div style={{ padding: "70px 0" }}>
      <h1 className="title">
        إختر تصميم متجرك الاحترافي من بين العديد من القوالب الإحترافية
      </h1>
      <h3 className="catTitle" style={{ textAlign: "center" }}>
        تصاميم متنوعة لتخدم تجارتك
      </h3>
      <p className="sec-description">
        لتجربة أكثر سهولة وأكثر رضاءا لعملائك إختر تصميم متجرك الإلكتروني وابدأ
        في عرض منتجاتك . قم باختيار ما يناسب منتجاتك وتجارتك من بين مجموعة من
        التصميمات المتنوعة لواجهة المتجر عند إنشاء متجرك وتطبيق المتجر
        الالكتروني الخاص بك
      </p>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={image5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Choose;
