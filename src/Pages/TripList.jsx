import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
        `${partecipante.nome} ${partecipante.cognome}`.toLowerCase().includes(cercaPartecipante.toLowerCase())
    );

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

                <h1 className="mb-4">{viaggio ? viaggio.citta : "Viaggio non trovato"}</h1>
                <h2 className="mb-4 text-muted">{viaggio ? viaggio.attivita : ""}</h2>

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

            
            {utenteSelezionato && showModal && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {utenteSelezionato.nome} {utenteSelezionato.cognome}
                                </h5>
                                <button type="button" className="btn-close" onClick={chiudiModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Codice Fiscale: {utenteSelezionato.codiceFiscale}</p>
                                <p>Email: {utenteSelezionato.email}</p>

                                <p className="d-flex justify-content-between align-items-center">
                                    Numero telefono: {utenteSelezionato.telefono}
                                    <a href={`tel:${utenteSelezionato.telefono}`} className="btn btn-success m-3 call-now px-3">
                                        Chiama ora
                                    </a>
                                </p>

                                <p className="d-flex justify-content-between align-items-center">
                                    Contatto Emergenza: {utenteSelezionato.contattoEmergenza}
                                    <a href={`tel:${utenteSelezionato.contattoEmergenza}`} className="btn btn-danger m-3 call-now px-3">
                                        Chiama ora
                                    </a>
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={chiudiModal}>
                                    Chiudi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TripList;
