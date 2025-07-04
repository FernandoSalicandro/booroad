import {useState} from 'react';
import { useAsyncValue, useNavigate } from "react-router-dom";

export default function ViaggiCard({viaggio, foto}) {
    const {citta, attivita,dataInizio, id, poster} = viaggio;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/trip/${id}`);
    }
   
    return (
        <>
            <div className="card border-warning h-100">
                <h3 className="card-header border-warning">{citta}</h3>
                <div className="card-body">

                    <img className='card-img-top' src={poster} alt="foto" />
                    <figcaption className='mt-2'>{attivita}</figcaption>
                    <hr />
                    <p>Si parte il : {dataInizio}</p>


                    <button 
                    className="btn btn-primary my-2"
                    onClick={handleClick}>Vedi Dettagli Partecipanti</button>
                </div>
            </div>
        </>
    )
}