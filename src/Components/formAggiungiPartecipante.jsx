import { useState, useEffect } from 'react';

export default function FormAggiungiPartecipante({ partecipante, handlePartecipanteChange }) {
    const [formData, setFormData] = useState(partecipante);

    useEffect(() => {
        setFormData(partecipante);
    }, [partecipante]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        handlePartecipanteChange(e); 
    };

    const { nome, cognome, codiceFiscale, email, telefono, contattoEmergenza, citta, dataDiNascita } = formData;

    return (
        <>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Nome" name="nome" value={nome} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Cognome" name="cognome" value={cognome} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Codice Fiscale" name="codiceFiscale" value={codiceFiscale} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="tel" className="form-control" placeholder="Telefono" name="telefono" value={telefono} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="tel" className="form-control" placeholder="Contatto Emergenza" name="contattoEmergenza" value={contattoEmergenza} onChange={handleChange} />
            </div>

           
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Città di Residenza" name="citta" value={citta || ''} onChange={handleChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="date" className="form-control" placeholder="Data di Nascita" name="dataDiNascita" value={dataDiNascita || ''} onChange={handleChange} />
            </div>
        </>
    );
}
