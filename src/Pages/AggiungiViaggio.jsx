import { useContext, useState } from 'react';
import { ViaggiContext } from '../GlobalContext/ViaggiContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function AggiungiViaggio() {
    const { viaggi, setViaggi } = useContext(ViaggiContext);
    const navigate = useNavigate();
    const [aggiungiPartecipanti, setAggiungiPartecipanti] = useState(false);
    const [partecipante, setPartecipante] = useState({
        id: '',
        nome: '',
        cognome: '',
        codiceFiscale: '',
        email: '',
        telefono: '',
        contattoEmergenza: ''
    })

    const [nuovoViaggio, setNuovoViaggio] = useState({
        id: '',
        citta: '',
        attivita: '',
        dataInizio: '',
        dataFine: '',
        poster: '',
        numeriEmergenza: {
            polizia: '',
            ambulanza: '',
            altro: ''
        },
        partecipanti: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuovoViaggio({
            ...nuovoViaggio,
            [name]: value
        });
    };

    const handleNumeriEmergenzaChange = (e) => {
        const { name, value } = e.target;
        setNuovoViaggio({
            ...nuovoViaggio,
            numeriEmergenza: {
                ...nuovoViaggio.numeriEmergenza,
                [name]: value
            }
        });
    };

    const handlePartecipanteChange = (e) => {
        const { name, value } = e.target;
        setPartecipante({
            ...partecipante,
            [name]: value
        })
    };

    const aggiungiPartecipante = () => {
        const newPartecipante = {
            ...partecipante,
            id: `p${Date.now()}`
        }

        setNuovoViaggio({
            ...nuovoViaggio,
            partecipanti: [...nuovoViaggio.partecipanti, newPartecipante]
        })

        setPartecipante({
            id: '',
            nome: '',
            cognome: '',
            codiceFiscale: '',
            email: '',
            telefono: '',
            contattoEmergenza: ''
        })
    }

const handleSubmit = (e) => {
    e.preventDefault();

    const viaggioCompleto = {
        ...nuovoViaggio,
        id: `v${Date.now()}`,
        poster: nuovoViaggio.poster.startsWith('img/') ? nuovoViaggio.poster : `img/${nuovoViaggio.poster}`
    };

    setViaggi([...viaggi, viaggioCompleto]);
    navigate('/');
};

return (
    <>
        <h1 className="text-center my-5">Aggiungi Un Viaggio</h1>
        <div className="container">
            <form className="my-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Città</label>
                    <input
                        type="text"
                        className="form-control"
                        name="citta"
                        value={nuovoViaggio.citta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Attività</label>
                    <input
                        type="text"
                        className="form-control"
                        name="attivita"
                        value={nuovoViaggio.attivita}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data Inizio</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dataInizio"
                        value={nuovoViaggio.dataInizio}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data Fine</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dataFine"
                        value={nuovoViaggio.dataFine}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">URL Poster</label>
                    <input
                        type="text"
                        className="form-control"
                        name="poster"
                        value={nuovoViaggio.poster}
                        onChange={handleChange}
                        placeholder="es: BooroadNuovaImmagine.png"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label">Numeri di Emergenza</label>
                    <input
                        type="text"
                        className="form-control mb-2"
                        name="polizia"
                        placeholder="Polizia (es: 112)"
                        value={nuovoViaggio.numeriEmergenza.polizia}
                        onChange={handleNumeriEmergenzaChange}
                        required
                    />

                    <input
                        type="text"
                        className="form-control mb-2"
                        name="ambulanza"
                        placeholder="Ambulanza (es: 118)"
                        value={nuovoViaggio.numeriEmergenza.ambulanza}
                        onChange={handleNumeriEmergenzaChange}
                        required
                    />

                    <input
                        type="text"
                        className="form-control"
                        name="altro"
                        placeholder="Altro (es: soccorso alpino, vigili...)"
                        value={nuovoViaggio.numeriEmergenza.altro}
                        onChange={handleNumeriEmergenzaChange}
                    />
                </div>
                <div className="wrapper">

                    <button type="button" className="btn btn-primary" onClick={() => setAggiungiPartecipanti(!aggiungiPartecipanti)}>
                        Aggiungi Partecipanti
                    </button>
                    <button type="submit" className="btn btn-success">
                        Crea Viaggio
                    </button>


                </div>

                {aggiungiPartecipanti && (
                    <div className="mt-4 p-3 border rounded">
                        <h5>Aggiungi Partecipante</h5>

                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <input type="text" className="form-control" placeholder="Nome" name="nome" value={partecipante.nome} onChange={handlePartecipanteChange} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="text" className="form-control" placeholder="Cognome" name="cognome" value={partecipante.cognome} onChange={handlePartecipanteChange} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="text" className="form-control" placeholder="Codice Fiscale" name="codiceFiscale" value={partecipante.codiceFiscale} onChange={handlePartecipanteChange} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="email" className="form-control" placeholder="Email" name="email" value={partecipante.email} onChange={handlePartecipanteChange} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="tel" className="form-control" placeholder="Telefono" name="telefono" value={partecipante.telefono} onChange={handlePartecipanteChange} />
                            </div>
                            <div className="col-md-6 mb-2">
                                <input type="tel" className="form-control" placeholder="Contatto Emergenza" name="contattoEmergenza" value={partecipante.contattoEmergenza} onChange={handlePartecipanteChange} />
                            </div>
                        </div>

                        <button type="button" className="btn btn-outline-primary mt-2" onClick={aggiungiPartecipante}>
                            Aggiungi Partecipante alla Lista
                        </button>

                        {nuovoViaggio.partecipanti.length > 0 && (
                            <ul className="mt-3 list-group">
                                {nuovoViaggio.partecipanti.map(p => (
                                    <li key={p.id} className="list-group-item">
                                        <div className="d-flex justify-content-between align-items-center">
                                            {p.nome} {p.cognome} – {p.email}<div className='aggiunto'>Aggiunto</div>
                                        </div>
                                        
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

            </form>
        </div>
    </>
);
}