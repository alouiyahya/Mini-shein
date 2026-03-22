import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/cart-slice';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 z-[100] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      <div className={`fixed top-0 right-0 h-screen w-full md:w-400px bg-white shadow-2xl transition-transform duration-500 z-[101] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Shopping Bag ({cartItems.length})</h2>
            <button onClick={onClose} className="text-xl hover:rotate-90 transition-transform cursor-pointer">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                <span className="text-4xl">🛒</span>
                <p className="text-[10px] uppercase tracking-widest italic">Your bag is empty</p>
                <button onClick={onClose} className="text-black text-[10px] font-bold underline uppercase tracking-widest">Start Shopping</button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-24 bg-[#f6f6f6] flex-shrink-0 p-2">
                    <img src={item.image} className="w-full h-full object-contain mix-blend-multiply" alt={item.title} />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase truncate tracking-tight text-slate-800">{item.title}</h4>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black tracking-wider">${item.price}</span>
                      <button 
                        onClick={() => dispatch(removeItem(item.id))} 
                        className="text-[9px] uppercase font-bold text-red-400 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Subtotal</span>
                <span className="text-xl font-black">${total.toFixed(2)}</span>
              </div>
              
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="block w-full bg-black text-white py-5 text-center font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-all shadow-xl shadow-black/5 active:scale-[0.98]"
              >
                Proceed to Checkout
              </Link>
              
              <button 
                onClick={() => dispatch(clearCart())} 
                className="w-full mt-4 text-[9px] text-slate-300 hover:text-red-400 transition-colors uppercase tracking-widest font-bold"
              >
                Clear All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;