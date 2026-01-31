import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <LessonContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;