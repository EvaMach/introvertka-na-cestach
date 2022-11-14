import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index.tsx';
import Header from './components/Header/index.tsx';
import Blog from './components/Blog/index.tsx';
import './style.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cestopisy" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
