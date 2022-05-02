import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import NavBar from "./components/NavBar"

// App() Asi se llama a la fx App() en JS

// <App /> Asi se llama a la fx App() en JSX

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*/<App /> */}
    <NavBar />
  </React.StrictMode>
)
