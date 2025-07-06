import { useState, useContext } from "react";
import { ViaggiContext } from "../GlobalContext/ViaggiContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import ModaleViaggiatore from "../Components/ModaleViaggiatore.jsx";
import FormAggiungiPartecipante from "../Components/formAggiungiPartecipante.jsx";

const TripList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { viaggi, setViaggi } = useContext(ViaggiContext);
    const viaggio = viaggi.find(v => v.id === id); 
    const [partecipanti, setPartecipanti] = useState(viaggio ? viaggio.partecipanti : []);
    const [cercaPartecipante, setCercaPartecipante] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [utenteSelezionato, setUtenteSelezionato] = useState(null);
    const [editPartecipanteId, setEditPartecipanteId] = useState(null);


    const filtroRicercaUtente = partecipanti.filter(partecipante =>
        `${partecipante.nome} ${partecipante.cognome}`.toLowerCase().trim().includes(cercaPartecipante.toLowerCase().trim())
    );

    const apriModal = (partecipante) => {
        setUtenteSelezionato(partecipante);
        setShowModal(true);
    };

    const chiudiModal = () => {
        setShowModal(false);
        setUtenteSelezionato(null);
    };

    const handlePartecipanteChange = (id, updatedFields) => {
        setPartecipanti(prevPartecipanti =>
            prevPartecipanti.map(partecipante =>
                partecipante.id === id ? { ...partecipante, ...updatedFields } : partecipante
            )
        );

    };

    const handleDelete = (idPartecipante) => {
        setPartecipanti(prevPartecipanti => prevPartecipanti.filter(partecipante => partecipante.id !== idPartecipante))
    }

    return (
        <>
            <img
                src={`../${viaggio?.poster}`}
                alt="poster"
                className="mb-3 image-fluid banner-img"
                style={{ width: '100vw' }}
            />

            <div className="container my-5">
                <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                    ← Torna Indietro
                </button>
                {viaggio ? (
                    <>
                        <h1 className="mb-4"> {viaggio.citta} - {viaggio.dataInizio} / {viaggio.dataFine}</h1>
                        <img src={`../${viaggio.poster}`} alt="poster" className="mb-3" width={200} height={200} />
                        <h2 className="mb-4 text-muted">{viaggio.attivita}</h2>
                    </>
                ) : <h1 className="mb-4">Viaggio Non Trovato</h1>}

                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca partecipante..."
                    value={cercaPartecipante}
                    onChange={(e) => setCercaPartecipante(e.target.value)}
                />

                <ul className="list-group my-5 d-flex gap-2">
                    {filtroRicercaUtente.length > 0 ? (
                        filtroRicercaUtente.map((curPartecipante) => (
                            <>
                                <li key={curPartecipante.id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{curPartecipante.nome} {curPartecipante.cognome}</span>

                                    <div className="edit-group d-flex gap-1 px-1 py-1">

                                        <button className="btn btn-primary show-details" onClick={() => apriModal(curPartecipante)}>
                                            Dettagli
                                        </button>
                                        <button className="btn btn-warning edit-details" onClick={() => {
                                            setEditPartecipanteId(prevId =>
                                                prevId === curPartecipante.id ? null : curPartecipante.id
                                            );
                                        }}><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className="btn btn-danger remove-details" onClick={()=>handleDelete(curPartecipante.id)}><i className="fa-solid fa-trash-can"></i></button>

                                    </div>



                                </li>
                                {editPartecipanteId === curPartecipante.id && (
                                    <li className="list-group-item">
                                        <FormAggiungiPartecipante partecipante={curPartecipante} handlePartecipanteChange={(updatedFields) => handlePartecipanteChange(curPartecipante.id, updatedFields)} />
                                        <button className="btn btn-success mt-2" onClick={()=>setEditPartecipanteId(null)}>Salva Modifiche</button>
                                    </li>
                                )}



                            </>


                        ))
                    ) : (
                        <li className="list-group-item text-center">Nessun partecipante</li>
                    )}
                </ul>
            </div>

            {utenteSelezionato && showModal && (
                <ModaleViaggiatore utente={utenteSelezionato} apriModal={apriModal} chiudiModal={chiudiModal} />
            )}
        </>
    );
};

export default TripList;