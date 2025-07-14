import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import blogThumbnail from "../assets/Blog Post Img/Blog 1/blog_post_img1.png";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample blog posts data - you can replace this with real data later
  const blogPosts = [
    {
      id: 1,
      title:
        "Latest Trends in Custom T-Shirt Printing: Shaping the Future of Apparel",
      excerpt:
        "In the vibrant world of fashion, custom T-shirts have evolved far beyond simple garments. They are canvases for self-expression, powerful marketing tools, and statements of identity. As we navigate through 2025, the custom T-shirt printing industry is experiencing a dynamic transformation...",
      author: "Trendydice Team",
      date: "July 2025",
      readTime: "15 min read",
      category: "Printing",
      image: blogThumbnail,
    },
  ];

  const categories = ["All", "Printing"];

  // Filter blog posts based on selected category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-[#FFF4DF] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-black font-poppins text-3xl sm:text-4xl lg:text-5xl xl:text-[75px] font-medium leading-[1.29] mb-4 sm:mb-6">
            TRENDYDICE BLOG
          </h1>
          <p className="text-black/70 font-inter text-lg sm:text-xl lg:text-2xl font-medium max-w-3xl mx-auto px-4">
            Insights, tips, and trends from the world of custom apparel and bulk
            manufacturing
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-poppins font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-[#211278] text-white"
                    : "bg-[#FFF4DF] text-[#211278] hover:bg-[#211278] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Blog Post Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-[#211278] text-white text-xs sm:text-sm font-poppins font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Blog Post Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                    <span className="font-poppins">{post.author}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{post.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-poppins font-semibold text-black mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 font-poppins text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="text-[#211278] font-poppins font-medium hover:text-[#211278]/80 transition-colors text-sm sm:text-base">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
