import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Kursi',
      image: '/assets/images/produk-5.png',
      description: 'Kursi minimalis dengan desain modern'
    },
    {
      id: 2,
      name: 'Meja',
      image: '/assets/images/produk-9.png',
      description: 'Meja berkualitas tinggi untuk berbagai kebutuhan'
    },
    {
      id: 3,
      name: 'Lemari',
      image: '/assets/images/produk-7.png',
      description: 'Lemari storage dengan desain elegan'
    },
    {
      id: 4,
      name: 'Partisi',
      image: '/assets/images/produk-14.png',
      description: 'Partisi dengan desain elegan'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Kategori Produk
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Jelajahi koleksi mebel kami yang dirancang khusus untuk memenuhi kebutuhan rumah modern Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-black transition-colors duration-500">
                    {category.name}
                  </h3>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-600 text-center group-hover:text-black transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
