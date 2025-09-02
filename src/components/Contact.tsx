import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih! Saya akan segera membalas pesan Anda.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#671B91] to-[#4B0082] bg-clip-text text-transparent">
              Mari Berkolaborasi
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#671B91] to-[#4B0082] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">@</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">wrknizz@email.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#671B91] to-[#4B0082] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Instagram</div>
                    <div className="text-gray-600">@wrknizz</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#671B91] to-[#4B0082] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Li</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">LinkedIn</div>
                    <div className="text-gray-600">Nikmatul Rizqi</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#671B91] via-[#4B0082] to-[#4E346F] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Siap untuk Project Baru?</h3>
              <p className="mb-6 opacity-90">
                Saya selalu terbuka untuk diskusi tentang project design yang menarik 
                dan kolaborasi kreatif yang menginspirasi.
              </p>
              <button className="bg-white text-[#671B91] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Mari Ngobrol!
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#671B91] focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#671B91] focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#671B91] focus:border-transparent bg-white/70 backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Ceritakan tentang project atau kolaborasi yang Anda inginkan..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#671B91] to-[#4B0082] text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;