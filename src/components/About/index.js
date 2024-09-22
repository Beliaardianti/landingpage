import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-2 aos-init aos-animate" data-aos="fade-up-left">
          <Image
            src="/assets/about (2).png"
            alt="Sakti Illustration"
            quality={100}
            width={412}
            height={283}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="md:w-1/2 p-4 aos-init aos-animate" data-aos="fade-up-right">
          <h4 className="text-lg font-semibold text-gray-600 mb-2">OUR APPLICATION</h4>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">1000+ customers using our application.</h2>
          <p className="text-lg text-gray-500 mb-4">
            X-channel Setel Radio Musik Terbaik. Serving you with the newest and the best music around 24 hours a day, and 7 days a week. 
            This application is the official, exclusive application for X-Channel.
          </p>
          <ul className="list-none text-lg text-gray-500">
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <p>Powerful and flexible theme</p>
            </li>
            <li className="flex items-center mb-2">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <p>Simple, transparent pricing</p>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-green-500 mr-2"></i>
              <p>Build tools and full documentation</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
