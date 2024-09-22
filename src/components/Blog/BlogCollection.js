import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import BlogCard from './BlogCard';

const BlogCollection = () => {
  const blogs = [
    { id: 6, title: 'X Radio Channel', image: '/uploads/1613033571_1613019309_1611890682_bike.jpg' },
    { id: 7, title: 'Youtube', image: '/uploads/1613033594_A-1611893727.jpg' },
    { id: 8, title: 'Spotify', image: '/uploads/1613033625_A-1612244298.jpg' },
    { id: 9, title: 'Mobile Games', image: '/uploads/1613033650_1613019593_1612246516_overcooked-2-switch-hero.jpg' },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard id={blog.id} title={blog.title} image={blog.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCollection;
