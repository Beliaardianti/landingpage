import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <section className="bg-white flex-grow py-16">
          <div className="relative h-96 flex items-center justify-center">
            <img 
              src="/assets/Radiochannel.jpg" 
              alt="SaktiMobile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="absolute text-white text-4xl font-bold">About Us - Who We Are?</h1>
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-14 px-4 lg:px-24">
            <div className="lg:w-1/2 mb-10 lg:mb-2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mt-8">Sakti Mobile</h2>
              <h3 className="text-xl text-gray-600 mb-6">Check out our company story and work process</h3>
              <p className="text-gray-600 mb-6 max-w-6xl lg:mr-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 mb-6 max-w-3xl lg:mr-14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300">
                More About Us
              </button>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/assets/Radiochannel.jpg" 
                alt="RadioChannel" 
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
