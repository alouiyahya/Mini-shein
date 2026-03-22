import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-light tracking-[0.3em] uppercase">Create Account</h2>
        </div>

        <form className="space-y-6">
          <input type="text" placeholder="FULL NAME" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black text-sm tracking-widest" />
          <input type="email" placeholder="EMAIL ADDRESS" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black text-sm tracking-widest" />
          <input type="password" placeholder="PASSWORD" className="w-full border-b border-slate-200 py-3 outline-none focus:border-black text-sm tracking-widest" />
          
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" className="accent-black" />
            <label className="text-[10px] text-slate-400 tracking-widest uppercase">I agree to Terms & Conditions</label>
          </div>

          <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
            Register
          </button>
        </form>

        <div className="text-center text-[10px] tracking-widest uppercase text-slate-400">
          Already have an account? <Link to="/login" className="text-black font-bold hover:underline">Sign in here</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;