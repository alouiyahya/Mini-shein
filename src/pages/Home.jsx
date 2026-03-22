import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="py-8">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-light tracking-[0.2em] uppercase mb-4">New Arrivals</h2>
        <div className="mt-8 max-w-md mx-auto relative group">
          <input 
            type="text"
            placeholder="Search for items..."
            className="w-full bg-white border-b border-slate-300 py-3 px-2 outline-none focus:border-black transition-all text-center tracking-wide"
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8">
          {[...Array(8)].map((_, i) => <div key={i} className="aspect-3/4 bg-slate-200 animate-pulse" />)}
        </div>
      ) : (
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {currentItems.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-20 gap-8 mb-10">
              <button 
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="text-sm uppercase tracking-widest disabled:opacity-20 hover:underline cursor-pointer"
              >
                Back
              </button>
              <span className="text-xs tracking-[0.5em] font-bold">{currentPage} / {totalPages}</span>
              <button 
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="text-sm uppercase tracking-widest disabled:opacity-20 hover:underline cursor-pointer"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default Home;