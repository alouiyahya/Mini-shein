import { useParams, Link } from 'react-router-dom'; // 1. Zid Link
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartslice';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        window.scrollTo(0, 0); // Bach t-bda l-page men l-fouq
      });
  }, [id]);

  if (!product) return <div className="p-20 text-center animate-pulse tracking-widest">Loading details...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 animate-in fade-in slide-in-from-top-2 duration-700">
      
      {/* 2. Bouton dyal r-rujou3 l-Home */}
      <Link 
        to="/" 
        className="inline-flex items-center text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 hover:text-black mb-10 transition-colors group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
        Back to collections
      </Link>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Image Section */}
        <div className="bg-[#f6f6f6] aspect-3/4 flex items-center justify-center p-8 rounded-sm overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-700" 
          />
        </div>

        {/* Info Section */}
        <div className="space-y-8 py-4">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-[0.3em] font-bold block mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl font-light tracking-tight text-slate-900 leading-tight italic">
              {product.title}
            </h1>
          </div>

          <p className="text-3xl font-black text-black">
            ${product.price}
          </p>

          <div className="border-t border-b border-slate-100 py-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-slate-400">Description</h3>
            <p className="text-slate-600 leading-relaxed text-sm font-light">
              {product.description}
            </p>
          </div>
          
          <button 
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-black text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-black/10"
          >
            Add to bag
          </button>

          <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-slate-400 font-bold justify-center pt-4">
            <span>Free Shipping</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;