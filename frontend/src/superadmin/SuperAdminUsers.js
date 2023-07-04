import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SuperAdminUsers() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/superadmin/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/deleteUser/'+id)
        .then(res => navigate('/superadmin/users'))
        .catch(err => console.log(err));
    }

    const navigate = useNavigate();

    return (
        <div className='justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50'></div>
            <Link to="/createUser" className="btn btn-success">Add +</Link>
                <table className= 'table'>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Password</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((d, i) => (
                            <tr>
                                <td> {d.dni} </td>
                                <td> {d.nombre} </td>
                                <td> {d.email} </td>
                                <td> {d.rol} </td>
                                <td> {d.pass} </td>
                                <td>
                                    <Link to={`/updateUser/${d.id}`} className="btn btn-sm btn-primary">Update</Link>
                                    <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default SuperAdminUsers