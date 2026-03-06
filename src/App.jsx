import React from 'react';

import Header from './sections/Header';
import About from './sections/About';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;