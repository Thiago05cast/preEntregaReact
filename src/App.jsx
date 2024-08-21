
import React, { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/navbar/navbar'
import CartWidget from './componentes/CartWidgets/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './componentes/error/error'



const App = () => {
      return(
        <>
        
<BrowserRouter>
        
        <Navbar/>
        <Routes>
          
        <Route path='/' element={<ItemListContainer greeting={"Los Mejores Celulares"}/>}> </Route>
        
        <Route path='/Item/:id' element={<ItemDetailContainer/>}> </Route>

        <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route>

        <Route path='*' element={<Error/>}> </Route>
          
        </Routes>



</BrowserRouter>
         
        
        </>
      )
}

export default App;
