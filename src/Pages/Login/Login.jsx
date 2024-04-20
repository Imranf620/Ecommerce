import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Top from '../../Components/Top/Top';
import Navbar from '../../Components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setShowSignup(false);
  };

  const toggleSignup = (e) => {
    e.preventDefault();
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <>
      <Top />
      <Navbar />
      <div className="container my-10 px-10">
        {showLogin && (
          <div className="flex flex-wrap items-center border border-gray-300 rounded-xl p-10 transition duration-300 hover:shadow-lg">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
              <img
                src="https://source.unsplash.com/random"
                alt="Login Image"
                className="w-full h-auto md:max-h-[50vh] rounded-lg shadow-lg object-cover"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-center h-max overflow-y-hidden">Login to Exclusive</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
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
          <div className="flex flex-wrap items-center border border-gray-300 rounded-xl p-10 transition duration-300 hover:shadow-lg">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
              <img
                src="https://source.unsplash.com/random"
                alt="Signup Image"
                className="w-full h-auto md:max-h-[50vh] rounded-lg shadow-lg object-cover"
                style={{ minHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-center h-max overflow-y-hidden">Create Your Account</h2>
              <form className='flex flex-col gap-5 '>
                <input
                  type="text"
                  placeholder="Name"
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
                />
                <div className="flex flex-col md:flex-row justify-between gap-4"> 
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-blue-200 transition duration-300"
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    className="w-full bg-red-500 hover:bg-gray-700 text-white font-bold py-3 rounded focus:outline-none focus:ring focus:ring-gray-200 transition duration-300"
                  >
                    <FontAwesomeIcon className="mr-4" icon={faGoogle} />
                    Sign Up with Google
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-center">
                Already have an account?{' '}
                <a href="#" onClick={toggleLogin} className="text-blue-500 hover:text-blue-700">
                  Login
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Login;
