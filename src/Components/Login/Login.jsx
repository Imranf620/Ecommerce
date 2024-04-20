import React, { useState } from 'react';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div className="container my-10 px-10 ">
      {showLogin && (
        <div className="flex flex-wrap items-center border-black border-[1px] p-10 rounded-xl">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://source.unsplash.com/random"
              alt="Login Image"
              className="w-full h-auto md:max-h-[50vh] rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center overflow-y-hidden">Login to Exclusive</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center">
              Don't have an account?{' '}
              <a href="#" onClick={toggleSignup} className="text-blue-500 hover:text-blue-700">
                Create one
              </a>
            </p>
          </div>
        </div>
      )}
      {showSignup && (
        <div className="flex flex-wrap  items-center border-black border-[1px] p-10 rounded-xl ">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
            <img
              src="https://source.unsplash.com/random"
              alt="Signup Image"
              className="w-full h-auto md:max-h-[50vh] rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center overflow-y-hidden">Create Your Account</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              />
              <div className="flex justify-between gap-10">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-blue-200"
                >
                  Create Account
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-gray-200"
                >
                  Sign Up with Google
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-center">
              Already Have an Account?{' '}
              <a href="#" onClick={toggleLogin} className="text-blue-500 hover:text-blue-700">
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
