import { useContext, useState } from 'react';
import { ViaggiContext } from '../GlobalContext/ViaggiContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function AggiungiViaggio() {
    const { viaggi, setViaggi } = useContext(ViaggiContext);
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const viaggioCompleto = {
            ...nuovoViaggio,
            id: `v${Date.now()}`,
            // Assicurati che il poster abbia il percorso corretto
            poster: nuovoViaggio.poster.startsWith('img/') ? nuovoViaggio.poster : `img/${nuovoViaggio.poster}`
        };

        setViaggi([...viaggi, viaggioCompleto]);
        navigate('/'); // Reindirizza alla homepage dopo la creazione
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

                    <button className="btn btn-primary mx-2">
                        Aggiungi Partecipanti
                    </button>
                    <button type="submit" className="btn btn-success">
                        Crea Viaggio
                    </button>
                </form>
            </div>
        </>
    );
}