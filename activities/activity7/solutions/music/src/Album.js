import React from 'react';
import { useNavigate } from "react-router-dom";

const Album = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/show/${props.album.albumId}`);
    };

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.album.image} className="card-img-top" alt={props.album.title} />
            <div className="card-body">
                <h5 className="card-title">{props.album.title}</h5>
                <p className="card-text">{props.album.description}</p>
                <button onClick={handleClick} className="btn btn-primary">Show Album</button>
            </div>
        </div>
    );
}

export default Album;