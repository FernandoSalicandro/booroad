export default function formAggiungiPartecipante({partecipante, handlePartecipanteChange}) {

    const {nome, cognome, codiceFiscale, email, telefono, contattoEmergenza} = partecipante;
    return (
        <>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Nome" name="nome" value={nome} onChange={handlePartecipanteChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Cognome" name="cognome" value={cognome} onChange={handlePartecipanteChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="text" className="form-control" placeholder="Codice Fiscale" name="codiceFiscale" value={codiceFiscale} onChange={handlePartecipanteChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={handlePartecipanteChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="tel" className="form-control" placeholder="Telefono" name="telefono" value={telefono} onChange={handlePartecipanteChange} />
            </div>
            <div className="col-md-6 mb-2">
                <input type="tel" className="form-control" placeholder="Contatto Emergenza" name="contattoEmergenza" value={contattoEmergenza} onChange={handlePartecipanteChange} />
            </div>
        </>
    )
}