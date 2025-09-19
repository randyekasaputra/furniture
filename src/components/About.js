import React from 'react';

const About = () => {
  const whatsappNumber = '6281392314626';
  const whatsappMessage = 'Halo, saya ingin berkonsultasi tentang desain interior dan pemilihan mebel yang tepat untuk rumah saya.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="tentang" className="py-12 sm:py-16 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
              Tentang DK Project Furniture
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Sejak 2015, DK Project Furniture telah menjadi pilihan utama untuk mebel minimalis dan modern 
              di Indonesia. Kami berkomitmen menyediakan produk berkualitas tinggi dengan desain 
              yang timeless dan fungsional.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Setiap produk kami dipilih dengan teliti untuk memastikan kualitas terbaik dan 
              kesesuaian dengan gaya hidup modern. Tim desainer berpengalaman kami siap membantu 
              Anda menciptakan ruang yang sempurna.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Produk Tersedia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">8+</div>
                <div className="text-xs sm:text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Konsultasi</div>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="bg-wa-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="hidden sm:inline">Konsultasi via WhatsApp</span>
              <span className="sm:hidden">Konsultasi via WA</span>
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/assets/images/showroom.jpg"
                alt="Showroom Mebelku"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-black mb-1">4.9/5</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Rating Pelanggan</div>
                  <div className="flex justify-center mt-1 sm:mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
