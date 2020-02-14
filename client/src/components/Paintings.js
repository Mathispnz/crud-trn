import React, { useState } from 'react';
import axios from 'axios';

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

    getAllPaintings();

    return (
        <div className="container">
            {paintings.map(painting => {
                return(
                    <div key={painting._id}>
                        <h2>{painting.title}</h2>
                    </div>
                )
            })}
        </div>
    )
}
