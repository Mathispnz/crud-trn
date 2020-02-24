import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Paintings() {
    const [paintings, setPaintings] = useState([]);

    function getAllPaintings() {
        axios.get('http://localhost:5000/api/paintings')
        .then(res => {
            setPaintings(res.data);
        })
        .catch(err => {
            console.log('Paintings Component error loading paintings', err)
        });
    }

    useEffect(() => {
        getAllPaintings();
    }, []);

    // getAllPaintings();

    function handleDelete(e) {
        axios.post('http://localhost:5000/api/paintings')
    }

    return (
        <div className="container">
            {paintings.map(painting => {
                return(
                    <div key={painting._id}>
                        <Link to={`/${painting._id}`}>
                            <h2>{painting.title}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
