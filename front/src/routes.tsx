import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint'
//exact = verifica igualdade. /create-point por causa da barra sempre vai cair no HOME.
const Routes = () => {
  return (
    <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  )
}

export default Routes;