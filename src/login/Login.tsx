import { Input } from "../components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen  bg-grey-300 text-white px-60 py-10">

      <div className="h-16" /> 

      
      <div
        id="form"
        className="flex flex-row max-w-6xl mx-auto rounded-[1.5rem] overflow-hidden shadow-2xl border border-black-700"
      >
        {/* Left Image */}
        <div id="left" className="flex-2">
          <img
            src="src/assets/img.jpg"
            alt="Welcome"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          id="right" 
          className="flex-1 flex flex-col justify-center items-center p-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
        >
        <h2 className="text-[2rem] font-bold mb-6 text-cyan-400">Login</h2>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email:
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 rounded-md bg-slate-800 border border-slate-600 text-white placeholder-gray-400"
          />

          <label htmlFor="password" className="text-sm font-medium text-gray-300">
            Password:
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="p-2 rounded-md bg-slate-800 border border-slate-600 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="mt-4 p-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-md transition"
          >
            Login
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
