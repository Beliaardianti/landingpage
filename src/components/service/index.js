import React from 'react';
import Link from 'next/link'; 

const Service = () => {
  return (
    <section id="services" className="services bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-6">Services</h3>
          <p className="text-gray-600 text-lg">
            Glovinus, we develop applications to connect between operators as
            Operator Content Provider and clients as Content Provider.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon bg-pink-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-briefcase text-pink-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">XChannel Radio</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Multichannel application, support web-based, SMS, UMB, STK or WAP / WEB.
            </p>
          </div>

          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon bg-yellow-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-card-checklist text-yellow-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">ALL TELCO DEVELOPMENT</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Our applications can be and have been shown to integrate all operators in Indonesia.
            </p>
          </div>

          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon bg-teal-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-bar-chart text-teal-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">CONTENT MANAGEMENT SYSTEM MARKETING</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Our applications can be configured easily, with a solid framework, targeting new services.
            </p>
          </div>

          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon bg-green-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-binoculars text-green-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">NEWS, QUIZ, INFO ON DEMAND, POLLING & RICH CONTENT</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Template application available for News, Quiz, Complaints/Request Services, Polling, and Rich Content downloads.
            </p>
          </div>

          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon bg-blue-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-percent text-blue-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">PROMO CHANNEL, DOWN CHARGING, KEYWORD ALIAS, DRM</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Supports promo channel stats, down-charging, multiple keywords for downloadable services, and DRM.
            </p>
          </div>

          <div className="box bg-white shadow-xl rounded-xl p-10 text-center" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon bg-purple-100 p-6 rounded-full inline-block mb-6">
              <i className="bi bi-code text-purple-600 text-5xl"></i>
            </div>
            <h4 className="title text-2xl font-bold mb-4">
              <Link href="/blog" className="hover:underline">OPEN SOURCE</Link>
            </h4>
            <p className="description text-gray-600 text-lg">
              Our applications are open-source, with no third-party license fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
