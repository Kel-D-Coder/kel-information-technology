import { Navbar } from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact'
import { About } from './Pages/About';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<h1 style={{ color: 'red' }}>Not Found</h1>} />
        </Routes>
          <Outlet />
        <Footer />
      </Router>
    </div>
  );
}

export default App;