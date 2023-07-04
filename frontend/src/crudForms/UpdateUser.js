import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const [dni, setDni] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [rol, setRol] = useState('')
    const [pass, setPass] = useState('') 

    const navigate = useNavigate();
    
    const {id} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/updateUser/'+id, {dni,nombre,email,rol,pass})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit= {handleSubmit}>
                    <h2>Update User</h2>
                    <div className = 'mb-2'>
                        <label htmlFor="">DNI</label>
                        <input type="text" placeholder='Ingrese Dni' className='form-control'
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
                    </div><div className = 'mb-2'>
                        <label htmlFor="">Rol</label>
                        <input type="text" placeholder='Ingrese Rol' className='form-control'
                        onChange={e => setRol(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Ingrese Contraseña' className='form-control'
                        onChange={e => setPass(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser