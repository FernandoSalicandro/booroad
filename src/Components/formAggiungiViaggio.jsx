export default function formAggiungiViaggio({ viaggio, handleChange, handleNumeriEmergenzaChange }) {
    const {citta, attivita,dataInizio,dataFine,poster,numeriEmergenza } = viaggio;

    return (

        <>
            <div className="mb-3">
                <label className="form-label">Città</label>
                <input
                    type="text"
                    className="form-control"
                    name="citta"
                    value={citta}
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
                    value={attivita}
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
                    value={dataInizio}
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
                    value={dataFine}
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
                    value={poster}
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
                    value={numeriEmergenza.polizia}
                    onChange={handleNumeriEmergenzaChange}
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    name="ambulanza"
                    placeholder="Ambulanza (es: 118)"
                    value={numeriEmergenza.ambulanza}
                    onChange={handleNumeriEmergenzaChange}
                    required
                />

                <input
                    type="text"
                    className="form-control"
                    name="altro"
                    placeholder="Altro (es: soccorso alpino, vigili...)"
                    value={numeriEmergenza.altro}
                    onChange={handleNumeriEmergenzaChange}
                />
            </div>
        </>

    )
}