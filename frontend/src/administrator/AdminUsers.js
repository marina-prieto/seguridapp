import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AdminUsers() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/admin/users')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    })

    const CensoredDNI = ({ dni }) => {
        const censoredDNI = dni.replace(/[a-zA-Z0-9]/g, (match, index) => {
          if (index === 0 || index === 2 || index === 4 || index === 5 || index === 8) {
            return '*';
          }
          return match;
        });
      
        return <span>{censoredDNI}</span>;
    };

    const navigate = useNavigate();

    return (
        <div className='justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded w-50'></div>
                <table className= 'table'>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map ((d, i) => (
                            <tr>
                                <td> {<CensoredDNI dni={d.dni} />} </td>
                                <td> {d.nombre} </td>
                                <td> {d.email} </td>
                                <td> {d.rol} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default AdminUsers