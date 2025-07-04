import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModaleViaggiatore from "../Components/ModaleViaggiatore.jsx";
import viaggi from "../datas/Viaggi.js";

const TripList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const viaggio = viaggi.find(v => v.id.toString() === id);
    const [partecipanti, setPartecipanti] = useState(viaggio ? viaggio.partecipanti : []);
    const [cercaPartecipante, setCercaPartecipante] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [utenteSelezionato, setUtenteSelezionato] = useState(null);


    const filtroRicercaUtente = partecipanti.filter(partecipante =>
        `${partecipante.nome} ${partecipante.cognome}`.toLowerCase().trim().includes(cercaPartecipante.toLowerCase().trim())
    ); {/*Aggiunto trim per la gestione degli spazi*/ }

    const apriModal = (partecipante) => {
        setUtenteSelezionato(partecipante);
        setShowModal(true);
    };

    const chiudiModal = () => {
        setShowModal(false);
        setUtenteSelezionato(null);
    };

    return (
        <>
            <div className="container my-5">
                <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                    ← Torna Indietro
                </button>
                {viaggio ? (
                    (
                        <>
                            <h1 className="mb-4"> {viaggio.citta}</h1>
                            <h2 className="mb-4 text-muted">{viaggio.attivita}</h2>
                        </>

                    )
                ) : <h1 className="mb-4">Viaggio Non Trovato</h1>}



                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca partecipante..."
                    value={cercaPartecipante}
                    onChange={(e) => setCercaPartecipante(e.target.value)}
                />

                <ul className="list-group my-5">
                    {filtroRicercaUtente.length > 0 ? (
                        filtroRicercaUtente.map((curPartecipante, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{curPartecipante.nome} {curPartecipante.cognome}</span>
                                <button className="btn btn-primary" onClick={() => apriModal(curPartecipante)}>
                                    Dettagli
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item text-center">Nessun partecipante</li>
                    )}
                </ul>
            </div>

            {/*Implementato Modale come Componente per pulizia codice*/}
            {utenteSelezionato && showModal && (
                <ModaleViaggiatore utente={utenteSelezionato} apriModal={apriModal} chiudiModal={chiudiModal} />
            )}
        </>
    );
};

export default TripList;
