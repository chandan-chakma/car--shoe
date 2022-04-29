import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const handleServiceDetail = (id) => {

        navigate(`/service/${id}`);


    }
    return (
        <div className='service'>
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleServiceDetail(id)}>Book {name}</button>

        </div>
    );
};

export default Service;