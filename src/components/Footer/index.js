import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-24">
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Logo dan Deskripsi */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sakti Mobile</h2>
            <p className="text-gray-400">
              Jl. Utan Kayu Raya No. 40 ABC, RT.5/RW.5, Utan Kayu Utara, Jakarta, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13120
            </p>
          </div>

          {/* Navigasi */}
          <div className="m-5">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex flex-wrap space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-400">© {new Date().getFullYear()} SaktiMobile. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
