import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 animate-in fade-in duration-700">
      <h2 className="text-3xl font-light tracking-[0.3em] uppercase text-center mb-16 italic">Secure Checkout</h2>
      
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest border-b pb-2">1. Shipping Address</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="FIRST NAME" className="border-b py-3 outline-none focus:border-black text-xs tracking-widest" />
              <input type="text" placeholder="LAST NAME" className="border-b py-3 outline-none focus:border-black text-xs tracking-widest" />
              <input type="text" placeholder="ADDRESS" className="md:col-span-2 border-b py-3 outline-none focus:border-black text-xs tracking-widest" />
              <input type="text" placeholder="CITY" className="border-b py-3 outline-none focus:border-black text-xs tracking-widest" />
              <input type="text" placeholder="PHONE" className="border-b py-3 outline-none focus:border-black text-xs tracking-widest" />
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest border-b pb-2">2. Payment Method</h3>
            <div className="bg-slate-50 p-6 rounded-sm space-y-4">
              <div className="flex items-center gap-4 border-b border-white pb-4">
                <input type="radio" checked className="accent-black" readOnly />
                <span className="text-[10px] font-bold tracking-widest">CREDIT / DEBIT CARD</span>
              </div>
              <div className="space-y-4 pt-2">
                <input type="text" placeholder="CARD NUMBER" className="w-full bg-transparent border-b border-slate-200 py-3 outline-none focus:border-black text-xs tracking-widest" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="bg-transparent border-b border-slate-200 py-3 outline-none focus:border-black text-xs tracking-widest" />
                  <input type="text" placeholder="CVV" className="bg-transparent border-b border-slate-200 py-3 outline-none focus:border-black text-xs tracking-widest" />
                </div>
              </div>
            </div>
          </section>

          <button className="w-full bg-black text-white py-6 font-bold uppercase tracking-[0.3em] text-xs hover:bg-slate-800 transition-all shadow-xl shadow-black/10">
            Complete Order — ${total.toFixed(2)}
          </button>
        </div>

        <div className="bg-[#f9f9f9] p-8 rounded-sm h-fit sticky top-32">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-8">Order Summary</h3>
          <div className="space-y-4 max-h-300px overflow-y-auto pr-2 mb-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img src={item.image} className="w-12 h-16 object-contain bg-white p-1" alt="" />
                <div className="flex-1">
                  <p className="text-[10px] font-bold truncate uppercase">{item.title}</p>
                  <p className="text-[10px] text-slate-400">QTY: {item.quantity}</p>
                </div>
                <span className="text-xs font-bold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-200 pt-6 space-y-3">
            <div className="flex justify-between text-xs tracking-widest text-slate-500 uppercase">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs tracking-widest text-slate-500 uppercase">
              <span>Shipping</span>
              <span className="text-green-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between text-lg font-black pt-4 border-t border-slate-200 uppercase tracking-tighter">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;