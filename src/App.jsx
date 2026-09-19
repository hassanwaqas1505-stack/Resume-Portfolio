// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Skills from './pages/Skills/Skills';
// import Projects from './pages/Projects/Projects';
// import Contact from './pages/Contact/Contact';
// import Chatbot from './components/Chatbot/Chatbot';



// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar />

//         <Routes>
//           <Route path='/' element = {<Home/>} />
//           <Route path='/about' element = {<About/>} />
//           <Route path='/skills' element = {<Skills />} />
//           <Route path='/projects' element = {<Projects />} />
//           <Route path='/contact' element = {<Contact />} />
//         </Routes>

//       </Router>

//       <Chatbot />
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Chatbot from './components/Chatbot/Chatbot';
import Loader from './components/Loader/Loader';


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </Router>

      <Chatbot />
    </div>
  )
}

export default App
