import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { logout } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { userLogout } from "../../Redux/AuthSlice";
import Swal from 'sweetalert2';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

const { userToken, userData } = useAppSelector((state) => state.auth);
  console.log('userToken :    ',userToken);
  console.log('userData :    ',userData);


  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
        if (userToken) navigate('/');
    }, [userToken, navigate]);

  const toggleMenu = () => setIsOpen(!isOpen);

const handleLogout = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You will be logged out of your account.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, logout',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    try {
      await logout(userData.email);
      dispatch(userLogout());
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Logout failed');
    }
  }
};


  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header className={`bg-gradient-to-r from-rose-50 via-white to-rose-50 backdrop-blur-md shadow-lg border-b border-rose-100 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center mr-3 shadow-md">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
            StokeimG
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            className="relative text-slate-700 font-medium hover:text-rose-600 transition-all duration-300 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/viewImages"
            className="relative text-slate-700 font-medium hover:text-rose-600 transition-all duration-300 group"
          >
            View Image
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="/addImage"
            className="relative text-slate-700 font-medium hover:text-rose-600 transition-all duration-300 group"
          >
            Add Image
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          {userData ? (
            <>
              <span className="text-slate-700 font-medium">
                Welcome, <span className="text-rose-500 font-semibold">{userData.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Logout
              </button>
            </>

          ) : (
            <a
              href="/login"
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-rose-100 text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="border-t border-rose-100 bg-gradient-to-b from-white to-rose-50/50 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#"
              className="flex items-center px-4 py-3 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="/viewImages"
              className="flex items-center px-4 py-3 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 font-medium"
            >
              View Image
            </a>
             <a
              href="/addImage"
              className="flex items-center px-4 py-3 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 font-medium"
            >
              Add Image
            </a>
            {userData ? (
              <span className="flex items-center px-4 py-3 text-slate-700 font-medium">
                Welcome, <span className="ml-1 text-rose-500 font-semibold">{userData.name}</span>
              </span>
            ) : (
              <a
                href="/login"
                className="flex items-center justify-center mx-2 mt-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-4 py-3 rounded-xl font-semibold hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-md"
              >
                Login
              </a>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;