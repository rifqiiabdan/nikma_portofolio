import { Camera, Video, Film, Clapperboard } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Adobe Premiere Pro", level: 92 },
    { name: "Adobe After Effects", level: 88 },
    { name: "DaVinci Resolve", level: 85 },
    { name: "Cinema 4D", level: 80 },
    { name: "Blender 3D", level: 75 },
    { name: "Adobe Audition", level: 85 }
  ];

  const equipment = [
    { name: "Canon EOS R5", icon: Camera },
    { name: "Sony FX3", icon: Video },
    { name: "DJI Ronin SC", icon: Film },
    { name: "Rode VideoMic Pro", icon: Clapperboard }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Hai! Saya Anya, mahasiswa semester 6 jurusan Desain Komunikasi Visual 
                yang fokus pada video production dan animation. Saya memiliki passion 
                yang besar dalam bercerita melalui medium visual bergerak.
              </p>
              <p className="text-lg">
                Perjalanan saya dimulai dari ketertarikan pada sinematografi dan 
                animasi sejak SMA. Saya percaya bahwa video yang baik mampu 
                menyampaikan emosi dan pesan yang mendalam kepada audiens.
              </p>
              <p className="text-lg">
                Selain kuliah, saya aktif mengambil project freelance untuk video 
                commercial, music video, dan animasi. Saya juga sering berkolaborasi 
                dengan teman-teman untuk mengerjakan short film dan konten kreatif.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Software Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Equipment</h3>
              <div className="grid grid-cols-2 gap-4">
                {equipment.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/40 rounded-xl">
                      <IconComponent className="w-6 h-6 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-gray-600 mt-1">Video Projects</div>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  2
                </div>
                <div className="text-gray-600 mt-1">Film Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;