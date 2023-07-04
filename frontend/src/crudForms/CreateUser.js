import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [rol, setRol] = useState('')
    const [pass, setPass] = useState('') 

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/createUser', {dni,nombre,email,rol,pass})
        .then(res => {
            navigate('/superadmin/users');
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit= {handleSubmit}>
                    <h2>Add User</h2>
                    <div className = 'mb-2'>
                        <label htmlFor="">DNI</label>
                        <input type="text" placeholder='Ingrese DNI' className='form-control'
                        onChange={e => setDni(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder='Ingrese Nombre' className='form-control'
                        onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Ingrese Email' className='form-control' 
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Rol</label>
                        <input type="text" placeholder='Ingrese Rol' className='form-control'
                        onChange={e => setRol(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Ingrese Contraseña' className='form-control'
                        onChange={e => setPass(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser