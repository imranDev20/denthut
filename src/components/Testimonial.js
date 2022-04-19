import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="container mx-auto px-10 my-10">
      <h2 className="text-center text-5xl text-cyan-400 font-bold my-3">
        Testimonials
      </h2>
      <p className="text-center w-1/2 mx-auto text-neutral-600">
        See what our patients are saying to us. You can also be a part of our
        amazing patients community.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="max-w-2xl my-10"
      >
        {reviews.map((review) => (
          <SwiperSlide
            className="px-20 flex flex-col items-center text-center"
            key={review.id}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-neutral-300 inline-flex justify-center items-center my-5">
              <img
                className="w-full h-full object-cover"
                src={review.avatar}
                alt=""
              />
            </div>
            <p className="text-center text-neutral-600 my-2">{review.review}</p>
            <h5 className="mt-6 text-cyan-400 text-xl font-medium">
              {review.name}
            </h5>
            <p className="text-sm text-neutral-500">{review.email}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
