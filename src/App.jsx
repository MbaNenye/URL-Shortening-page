import React from 'react'
import './App.css'
import Header from './components/header.jsx';
import Section from './components/section.jsx';
import Advanced from './components/advanced.jsx';
import Footer from './components/footer.jsx';
import Last from './components/last.jsx';
import Api from './components/api.jsx';
function App() {

  return (
    <div className="App">
       <Header/>
       <Section/>
       <Api/>
       <Advanced/>
       <Footer/>
       <Last/>
    </div>
  )
}

export default App
