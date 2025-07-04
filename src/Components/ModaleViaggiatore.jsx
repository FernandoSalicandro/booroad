export default function ModaleViaggiatore({ utente, apriModal, chiudiModal }) {
    const { nome, cognome, codiceFiscale, email, telefono, contattoEmergenza } = utente;
    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {nome} {cognome}
                        </h5>
                        <button type="button" className="btn-close" onClick={chiudiModal}></button>
                    </div>
                    <div className="modal-body">
                        <p>Codice Fiscale: {codiceFiscale}</p>
                        <p>Email: {email}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="d-flex justify-content-between align-items-center left-col">
                                Numero telefono: {telefono}
                            </p>
                            <a href={`tel:${telefono}`} className="btn btn-success m-3 call-now px-3">
                                Chiama ora
                            </a>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <p className="d-flex justify-content-between align-items-center left-col">
                                Contatto Emergenza: {contattoEmergenza}
                            </p>
                            <a href={`tel:${contattoEmergenza}`} className="btn btn-danger m-3 call-now px-3">
                                Chiama ora
                            </a>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={chiudiModal}>
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}