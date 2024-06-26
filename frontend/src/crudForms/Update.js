import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const [nombre, setNombre] = useState('')
    const [municipio, setMunicipio] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')

    const navigate = useNavigate();
    
    const {id} = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id, {nombre,municipio,direccion,telefono})
        .then(res => {
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit= {handleSubmit}>
                    <h2>Update Museum</h2>
                    <div className = 'mb-2'>
                        <label htmlFor="">Nombre</label>
                        <input type="text" placeholder='Ingrese Nombre' className='form-control'
                        onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Municipio</label>
                        <input type="text" placeholder='Ingrese Municipio' className='form-control' 
                        onChange={e => setMunicipio(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Dirección</label>
                        <input type="text" placeholder='Ingrese Dirección' className='form-control'
                        onChange={e => setDireccion(e.target.value)}/>
                    </div>
                    <div className = 'mb-2'>
                        <label htmlFor="">Teléfono</label>
                        <input type="text" placeholder='Ingrese Teléfono' className='form-control'
                        onChange={e => setTelefono(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update