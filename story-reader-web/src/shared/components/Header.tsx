import { Link } from "react-router-dom";
import { Search, BookOpen, LogIn, Sun, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">NHĐ</span>
              </div>
              <span className="text-xl font-semibold text-teal-600 whitespace-nowrap">
                Web của Đức
              </span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm truyện, tác giả..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="text-gray-600 hover:text-teal-600 transition-colors">
                <BookOpen size={24} />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-teal-600 hover:text-teal-700 transition-colors">
                <LogIn size={18} />
                <span className="hidden sm:inline">Đăng nhập</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
                <span>Đăng ký</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="flex items-center">
              <button className="flex items-center gap-2 px-4 py-3 hover:bg-gray-700 transition-colors">
                <Menu size={18} />
                <span>Thể loại</span>
              </button>
              <Link
                to="/completed"
                className="px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                Hoàn thành
              </Link>
              <Link
                to="/free"
                className="px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                Miễn phí
              </Link>
              <Link
                to="/forum"
                className="px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                Diễn đàn
              </Link>
            </nav>

            {/* Right Navigation */}
            <nav className="flex items-center">
              <button className="px-4 py-3 hover:bg-gray-700 transition-colors">
                <Sun size={18} />
              </button>
              <Link
                to="/guide"
                className="px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                Hướng dẫn
              </Link>
              <Link
                to="/submit"
                className="px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                Đăng truyện
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
