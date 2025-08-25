import React from 'react'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home   from './maz/Home';


const App = () => {
  return (
    <div  className="overflow-x-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App