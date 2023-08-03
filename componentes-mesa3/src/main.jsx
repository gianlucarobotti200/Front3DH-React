import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Principal from './components/Principal.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Principal />
    <Footer />
  </React.StrictMode>,
)
