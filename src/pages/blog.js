import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      {/* Blog Title */}
      <h1 className="text-5xl md:text-6xl text-center font-extrabold mb-4 text-gray-900 leading-tight">
        XChannel Radio
      </h1>

      {/* Blog Metadata */}
      <div className="flex justify-center text-gray-600 mb-10">
        <span className="mr-4">Published on: September 15, 2024</span>
        <span>|</span>
        <span className="ml-4">By: Admin</span>
      </div>

      {/* Blog Featured Image */}
      <div className="flex justify-center mb-12">
        <img
          src="assets/Radiochannel.jpg"
          alt="XChannel Radio"
          className="rounded-lg shadow-2xl w-full md:w-3/4 lg:w-1/2"
        />
      </div>

      {/* Blog Content */}
      <section className="post-content">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <p className="text-base lg:text-lg leading-6 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>

            <p className="text-base lg:text-lg leading-relaxed mb-4">
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
              with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            {/* Additional Section with Heading */}
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Rise of XChannel Radio</h2>
            <p className="text-base lg:text-lg leading-relaxed mb-6">
              XChannel Radio offers listeners an exciting new way to enjoy their favorite music and talk shows. With innovative content and a community-driven approach, we strive to deliver high-quality programming to a wide audience.
            </p>

            {/* Blockquote Example */}
            <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-6 text-gray-700">
              "XChannel Radio is changing the way we consume media, offering diverse content across various platforms."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Categories/Tags */}
      <div className="flex justify-center mt-10">
        <div className="text-center">
          <span className="bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm mr-2">#Radio</span>
          <span className="bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm mr-2">#Music</span>
          <span className="bg-gray-200 text-gray-600 rounded-full px-4 py-1 text-sm">#Technology</span>
        </div>
      </div>

      {/* Navigation to Other Posts */}
      <div className="flex justify-between mt-16">
        <a href="/previous-post" className="text-gray-600 hover:underline">
          ← Previous Post
        </a>
        <a href="/next-post" className="text-gray-600 hover:underline">
          Next Post →
        </a>
      </div>

     
    </div>
  );
};

export default Blog;
