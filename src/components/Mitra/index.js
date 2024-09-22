import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Mitra = () => {
  const clients = [
    { id: 1, logo: '/assets/Clients/telkomsel.png', alt: 'Telkomsel' },
    { id: 2, logo: '/assets/Clients/xl.png', alt: 'XL' },
    { id: 3, logo: '/assets/Clients/indosat.png', alt: 'Indosat' },
    { id: 4, logo: '/assets/Clients/smartfren.png', alt: 'Smartfren' },
    { id: 5, logo: '/assets/Clients/three.png', alt: 'Three' },
  ];

  return (
    <section id="clients" className="clients py-12 mt-5 mb-16">
      <div className="container mx-auto max-w-full px-4" data-aos="zoom-in">
        <header className="section-header text-center mb-8">
          <h3 className="text-2xl font-bold">Our Clients</h3>
        </header>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: {
              slidesPerView: 2, // Tampilkan 2 slide di layar kecil (mobile)
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3, // Tampilkan 3 slide di layar medium (tablet)
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // Tampilkan 4 slide di layar besar (desktop)
              spaceBetween: 30,
            },
          }}
          className="pt-12"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <img src={client.logo} alt={client.alt} className="mx-auto h-24 object-contain mt-5" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination mt-6"></div>
      </div>
    </section>
  );
};

export default Mitra;
