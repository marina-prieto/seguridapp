import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup/Signup';
import Login from './login/Login';
import View from './crudForms/View';
import Create from './crudForms/Create';
import Update from './crudForms/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/home' element={<View />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
