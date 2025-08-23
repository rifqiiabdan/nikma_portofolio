import { useState } from "react";
import { Play, Eye } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Short Film - 'Mimpi'",
      category: "video",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      description: "Drama pendek tentang perjuangan mahasiswa mengejar impian",
      duration: "5:30",
      type: "Short Film"
    },
    {
      id: 2,
      title: "Motion Graphics - Brand Intro",
      category: "animation",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      description: "Animasi logo dan intro untuk startup teknologi",
      duration: "0:15",
      type: "Motion Graphics"
    },
    {
      id: 3,
      title: "Music Video - Indie Band",
      category: "video",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "Video klip untuk band indie lokal dengan konsep vintage",
      duration: "3:45",
      type: "Music Video"
    },
    {
      id: 4,
      title: "2D Character Animation",
      category: "animation",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "Animasi karakter untuk series web anak-anak",
      duration: "2:20",
      type: "2D Animation"
    },
    {
      id: 5,
      title: "Commercial - Local Café",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      description: "Video promosi untuk kafe lokal dengan konsep lifestyle",
      duration: "1:00",
      type: "Commercial"
    },
    {
      id: 6,
      title: "3D Animation - Product Demo",
      category: "animation",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop",
      description: "Animasi 3D untuk demo produk teknologi",
      duration: "1:30",
      type: "3D Animation"
    },
    {
      id: 7,
      title: "Documentary - Campus Life",
      category: "video",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      description: "Dokumenter tentang kehidupan mahasiswa DKV",
      duration: "8:15",
      type: "Documentary"
    },
    {
      id: 8,
      title: "Social Media Content",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1541689221361-ad95003448dc?w=400&h=300&fit=crop",
      description: "Konten video untuk media sosial brand fashion",
      duration: "0:30",
      type: "Social Media"
    }
  ];

  const categories = [
    { id: "all", name: "Semua Karya" },
    { id: "video", name: "Video Production" },
    { id: "animation", name: "Animation" },
    { id: "commercial", name: "Commercial" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Video Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Koleksi karya video shoot dan animasi yang telah saya buat selama perjalanan kreatif
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/50 text-gray-700 hover:bg-white/70"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-purple-600 ml-1" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
                {/* Type badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {item.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                    <Eye className="w-4 h-4" />
                    Watch Now
                  </button>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.category.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;