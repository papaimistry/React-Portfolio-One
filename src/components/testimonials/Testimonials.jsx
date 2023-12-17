import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/fnd1.png";
import AVT2 from "../../assets/fnd2.png";
import AVT3 from "../../assets/fnd3.png";
import AVT4 from "../../assets/fnd4.png";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVT1,
    name: "Sutanu Biswas",
    review:
      "Exceptional service! The team exceeded my expectations with their dedication and outstanding results. Highly recommended for their professionalism and reliability.",
  },
  {
    avatar: AVT2,
    name: "Suvam Thakur",
    review:
      "Professional and prompt, their expertise shines through. Highly recommended for reliability and efficiency in delivering outstanding results. A trusted partner for tailored services.",
  },
  {
    avatar: AVT3,
    name: "Tirtho Mondol",
    review:
      "Impressed by their innovative solutions and excellent communication. They showcase a deep understanding of clients' needs, delivering personalized and effective services. Highly recommended for their dedication and results.",
  },
  {
    avatar: AVT4,
    name: "Sanket Sarkar",
    review:
      "Efficient and cost-effective, the team's attention to detail ensures a seamless experience. A trustworthy choice for those seeking quality and reliability in every aspect of service delivery.",
  },
];

const Testimonials = () => {
  return (
    <section>
      <h5>Review From Friends</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        loop={true}
        autoplay={{
          delay: 1790,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="friend__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5>{name}</h5>
              <small className="friend__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
