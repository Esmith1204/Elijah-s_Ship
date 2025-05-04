import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <Hero />
      <Footer/>
      <main className = "p-6">
      </main>
    </div>
  );
}

export default App
