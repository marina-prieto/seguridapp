import React, {useState} from "react"
import { Link, useNavigate } from 'react-router-dom'
import Validation from "./SignupValidation"
import axios from 'axios'

function Signup() {

    const [values, setValues] = useState({
        dni: '',
        nombre: '',
        email: '',
        rol: '',
        pass: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.dni === "" && errors.nombre === "" && errors.email === "" && errors.rol === "" && errors.pass === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign Up</h2>
                <form action = "" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="dni"><strong>DNI</strong></label>
                        <input type="text" placeholder='Ingrese DNI' name='dni'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.dni && <span className='text-danger'> {errors.dni}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="nombre"><strong>Nombre</strong></label>
                        <input type="text" placeholder='Ingrese Nombre' name='nombre'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'> {errors.nombre}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Ingrese Email' name='email'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'> {errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="rol"><strong>Rol</strong></label>
                        <input type="text" placeholder='Ingrese Rol' name='rol'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.rol && <span className='text-danger'> {errors.rol}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="pass"><strong>Password</strong></label>
                        <input type="password" placeholder='Ingrese Contraseña'  name='pass'
                        onChange={handleInput} className='form-control rounded-0'/>
                        {errors.pass && <span className='text-danger'> {errors.pass}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                    <p> </p>
                    <Link to="/" className='btn btn-default border w-100 rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup