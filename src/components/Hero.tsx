import { Play, Camera, Video } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <img src="images/profile.png" alt="Profile" className="w-28 h-28 rounded-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Nikmatul Rizqi
            </span>
            <br />
            <span className="text-gray-800">Video Creator & Animator</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mahasiswa Desain Komunikasi Visual yang passionate dalam menciptakan 
            konten video kreatif dan animasi yang memukau
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Play className="w-5 h-5" />
              Tonton Demo Reel
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-600 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2">
              <Video className="w-5 h-5" />
              Lihat Portfolio
            </button>
          </div>

          <div className="mt-8 text-gray-500">
            Follow me: <span className="font-semibold text-purple-600">@wrknizz</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;