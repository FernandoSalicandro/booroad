
import {  useNavigate } from "react-router-dom";

export default function ViaggiCard({ viaggio }) {
  const { citta, attivita, dataInizio, dataFine, id, poster, inCorso } = viaggio;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trip/${id}`);
  };

  return (
    <div className="card border-warning h-100">
      <div className="card-header border-warning">
        <h4>{citta}</h4>
        {inCorso && <p className="badge-incorso">In corso</p>}
      </div>
      <div className="card-body">
        <img className="card-img-top" src={poster} alt="foto" />
        <figcaption className="mt-2">{attivita}</figcaption>
        <hr />
        <p>Si parte il : {dataInizio}</p>
        <button className="btn btn-primary my-2" onClick={handleClick}>
          Vedi Dettagli Partecipanti
        </button>
      </div>
    </div>
  );
}
