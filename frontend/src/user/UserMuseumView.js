import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/user/museum')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const navigate = useNavigate();

    return (
        <div className='justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50'></div>
                <Link to="/createMuseum" className="btn btn-success">Add +</Link>
                <table className= 'table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Municipio</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((d, i) => (
                            <tr>
                                <td> {d.nombre} </td>
                                <td> {d.municipio} </td>
                                <td> {d.direccion} </td>
                                <td> {d.telefono} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Home