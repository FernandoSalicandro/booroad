import { useContext, useState } from 'react';
import { ViaggiContext } from '../GlobalContext/ViaggiContext.jsx';
import { useNavigate } from 'react-router-dom';
import FormAggiungiViaggio from '../Components/formAggiungiViaggio.jsx';
import FormAggiungiPartecipante from '../Components/formAggiungiPartecipante.jsx';

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
            {/*form per l'aggiunta di un viaggio*/}
            <div className="container">
                <form className="my-5" onSubmit={handleSubmit}>
                    <FormAggiungiViaggio viaggio={nuovoViaggio} handleChange={handleChange} handleNumeriEmergenzaChange={handleNumeriEmergenzaChange} />
                    <div className="wrapper">

                        <button type="button" className="btn btn-primary" onClick={() => setAggiungiPartecipanti(!aggiungiPartecipanti)}>
                            Aggiungi Partecipanti
                        </button>
                        <button type="submit" className="btn btn-success">
                            Crea Viaggio
                        </button>


                    </div>

                    {/*form per l'aggiunta dei partecipanti*/}
                    {aggiungiPartecipanti && (
                        <div className="mt-4 p-3 border rounded">
                            <h5>Aggiungi Partecipante</h5>

                            <div className="row">
                                <FormAggiungiPartecipante partecipante={partecipante} handlePartecipanteChange={handlePartecipanteChange} />
                            </div>

                            <button type="button" className="btn btn-outline-primary mt-2" onClick={aggiungiPartecipante}>
                                Aggiungi Partecipante alla Lista
                            </button>

                            {/*Lista temporanea dei partecipanti aggiunti */}
                            {nuovoViaggio.partecipanti.length > 0 && (
                                <ul className="mt-3 list-group">
                                    {nuovoViaggio.partecipanti.map(partecipante => (
                                        <li key={partecipante.id} className="list-group-item">
                                            <div className="d-flex justify-content-between align-items-center">
                                                {partecipante.nome} {partecipante.cognome} – {partecipante.email}<div className='aggiunto'>Aggiunto</div>
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