import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartslice';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-3/4 overflow-hidden bg-[#f6f6f6] mb-4 rounded-sm">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 p-4"
          />
          
          <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-1.5 py-0.5 font-bold tracking-tighter">
            -{Math.floor(Math.random() * 30 + 10)}%
          </span>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="space-y-1 px-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[12px] text-slate-500 truncate uppercase tracking-tight hover:text-black transition-colors">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-sm font-black tracking-wider text-slate-900">${product.price}</span>
          
          <button 
            onClick={(e) => {
              e.preventDefault(); 
              dispatch(addToCart(product));
            }}
            className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;