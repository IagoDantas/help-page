export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-blue-600">
              UChat
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Partner</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Learn</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Login
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign up free trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}