import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout'; // Importi l-Checkout jdida

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
      {/* Navbar dima l-fouq */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      
      {/* Sidebar dyal l-panier */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Routing Configuration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {/* Footer Minimalist */}
      <footer className="py-12 border-t border-slate-50 text-center mt-20 bg-slate-50/50">
        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
          © 2026 Yahya Market — Minimalist E-commerce Experience
        </p>
      </footer>
    </div>
  );
}

export default App;