import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home.jsx'
import Card from './Components/Card/Card.jsx'
import Search from './Components/Search/Search.jsx'
import Contextapi from './Components/Context/Contextapi.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Newfiltered from './Components/Search/Newfiltered.jsx'
import Emptyfiltered from './Components/Search/Emptyfiltered.jsx'
import Recipedetail from './Components/Card/Recipedetail.jsx'
import Navbar from './Pages/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <BrowserRouter>
       <Navbar/>
      <Contextapi>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/App' element={<App/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Newfiltered/:searchText' element={<Newfiltered/>}/>
      <Route path='/Emptyfiltered' element={<Emptyfiltered/>}/>
       <Route path='/Recipedetail/:id' element={<Recipedetail/>}/> 

        </Routes>
      </Contextapi>
     
    </BrowserRouter>
  </React.StrictMode>,
)
