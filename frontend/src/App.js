import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup/Signup';
import Login from './login/Login';
import Create from './crudForms/Create';
import Update from './crudForms/Update';
import SuperAdminView from './superadmin/SuperAdminView';
import AdminView from './administrator/AdminView';
import UserView from './user/UserView';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>

      <Route path='/superadmin/museum' element={<SuperAdminView />}></Route>
      <Route path='/admin/museum' element={<AdminView />}></Route>
      <Route path='/user/museum' element={<UserView />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
