import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/admin/museum')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const navigate = useNavigate();

    return (
        <div className='justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50'></div>
                <table className= 'table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Municipio</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((d, i) => (
                            <tr>
                                <td> {d.nombre} </td>
                                <td> {d.municipio} </td>
                                <td> {d.direccion} </td>
                                <td> {d.telefono} </td>
                                <td>
                                    <Link to={`/updateMuseum/${d.id}`} className="btn btn-sm btn-primary">Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Home