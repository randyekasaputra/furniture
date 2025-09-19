import React from 'react';

const Hero = () => {
  const whatsappNumber = '6281392314626';
  const whatsappMessage = 'Halo, saya tertarik dengan produk mebel minimalis modern. Bisa konsultasi lebih lanjut?';

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="home" className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo di atas headline */}
          <img 
            src="/assets/images/dk.png" 
            alt="Logo Mebelku" 
            className="mx-auto mb-4 sm:mb-6 w-32 h-auto"
            style={{maxWidth: '160px'}}
          />
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Selamat Datang di TOKO KAMI
            <span className="block text-gray-600">DeKa PROJECT FURNITURE</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Temukan koleksi furniture berkualitas tinggi dengan desain minimalis dan modern. 
            Buat rumah Anda lebih nyaman dan elegan dengan pilihan furniture terbaik.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-wa-green text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="hidden sm:inline">Belanja via WhatsApp</span>
            <span className="sm:hidden">Belanja via WA</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gray-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gray-100 rounded-full opacity-40"></div>
    </section>
  );
};

export default Hero;
