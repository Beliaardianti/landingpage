import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar sekarang akan muncul di bagian atas */}
      
      <section className="bg-white flex-grow">
        <div className="relative h-96 flex items-center justify-center">
          <img 
            src="/assets/contact.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-white text-lg">
              Jangan ragu untuk menghubungi kami kapanpun. Kami akan terhubung bersama Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-16 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-blue-900">Hubungi Kami</h1>
            <p className="text-gray-600">
              SaktiMobile adalah perusahaan solusi advertising dan digital. Kami siap menjadi bagian dari perubahan Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border-b-2 border-blue-900 pb-2">
                <i className="fas fa-phone-alt text-2xl text-blue-900"></i>
                <p className="text-gray-800">+62 212-2856-7560</p>
              </div>
              <div className="flex items-center gap-4 border-b-2 border-blue-900 pb-2">
                <i className="fas fa-envelope text-2xl text-blue-900"></i>
                <p className="text-gray-800">saktimobile@com</p>
              </div>
              <div className="flex items-start gap-4 border-b-2 border-blue-900 pb-2">
                <i className="fas fa-location-dot text-2xl text-blue-900"></i>
                <div>
                  <h2 className="text-lg font-bold">Kantor Utama (Jakarta)</h2>
                  <p className="text-gray-600">
                    Jl. Utan Kayu Raya No. 40 ABC, RT. 5/RW. 5, Utan Kayu Utara, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13120
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.520723064601!2d106.85956240978149!3d-6.194812893766952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f45fccd9bbc9%3A0x6086f3bc46eebb59!2sJl.%20Utan%20Kayu%20Raya%20No.40%2C%20Utan%20Kayu%20Utara%2C%20Kec.%20Matraman%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013120!5e0!3m2!1sen!2sid!4v1720515837094!5m2!1sen!2sid" 
              width="600" 
              height="450" 
              style={{ border: "0" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
