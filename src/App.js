import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainPage from './components/MainPage';
import Home from './Pages/Home';
import Men from './Pages/Men';
import Women from './Pages/Women';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
