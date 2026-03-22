import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-[0.3em] uppercase">Sign In</h2>
          <p className="mt-4 text-slate-400 text-xs tracking-widest uppercase">Welcome back to Yahya Market</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
            <input 
              type="email" 
              className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-all text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Password</label>
            <input 
              type="password" 
              className="w-full border-b border-slate-200 py-3 outline-none focus:border-black transition-all text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all mt-8">
            Sign In
          </button>
        </form>

        <div className="text-center text-[10px] tracking-widest uppercase text-slate-400">
          New to us? <Link to="/signup" className="text-black font-bold hover:underline">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;