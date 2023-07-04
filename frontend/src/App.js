import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup/Signup';
import Login from './login/Login';
import Create from './crudForms/Create';
import Update from './crudForms/Update';
import SuperAdminView from './superadmin/SuperAdminMuseumView';
import AdminView from './administrator/AdminMuseumView';
import UserView from './user/UserMuseumView';
import SuperAdminUsers from './superadmin/SuperAdminUsers';
import CreateUser from './crudForms/CreateUser';
import UpdateUser from './crudForms/UpdateUser';
import AdminUsers from './administrator/AdminUsers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/createMuseum' element={<Create />}></Route>
      <Route path='/updateMuseum/:id' element={<Update />}></Route>

      <Route path='/superadmin/museum' element={<SuperAdminView />}></Route>
      <Route path='/admin/museum' element={<AdminView />}></Route>
      <Route path='/user/museum' element={<UserView />}></Route>

      <Route path='/superadmin/users' element={<SuperAdminUsers />}></Route>
      <Route path='/createUser' element={<CreateUser />}></Route>
      <Route path='/updateUser/:id' element={<UpdateUser />}></Route>
      <Route path='/admin/users' element={<AdminUsers />}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
