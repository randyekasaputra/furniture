import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'all-products':
        return <AllProducts onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <>
            <Header onNavigate={setCurrentPage} />
            <main>
              <Hero />
              <Categories />
              <Products onViewAll={() => setCurrentPage('all-products')} />
              <About />
              <Testimonials />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
