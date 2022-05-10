import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from '../src/components/Nav/NavBar'
import ItemListContainer from '../src/components/Container/ItemListContainer'

// App() Asi se llama a la fx App() en JS
// <App /> Asi se llama a la fx App() en JSX

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer/>
  </React.StrictMode>
)
