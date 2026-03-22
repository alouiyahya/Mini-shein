import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ onOpenCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-12 border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-40">
      {/* Logo kaye-rje3 l-Home */}
      <Link to="/" className="hover:opacity-60 transition-opacity">
        <h1 className="text-xl font-black tracking-[0.3em] uppercase italic">
          Yahya Market
        </h1>
      </Link>
      
      <div className="flex items-center gap-6">
        {/* --- HAD L-ICON HIYA LI GHA T-DIK L-LOGIN --- */}
        <Link to="/login" className="hover:scale-110 transition-transform cursor-pointer">
          <span className="text-xl">👤</span>
        </Link>

        {/* Cart Icon */}
        <div onClick={onOpenCart} className="relative cursor-pointer group">
          <span className="text-2xl group-hover:scale-110 transition-transform inline-block">🛒</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;