import ViaggiCard from '../Components/ViaggiCard.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { ViaggiContext } from '../GlobalContext/ViaggiContext.jsx';

export default function Homepage() {

    const { viaggi } = useContext(ViaggiContext);
    const [cercaViaggio, setCercaViaggio] = useState('');
    const [showFiltroSearch, setShowFiltroSearch] = useState(false);
    const [calendar, setCalendar] = useState('');
    const [soloInCorso, setSoloInCorso] = useState(false);

    //funzione per trasformare il formato del date picker

    const formatDatePicker = (str) => {
        const [year, month, day] = str.split('-')
        const formatted = `${day}-${month}-${year}`
        return formatted
    }

    const parseDate = (str) => {
        const [day, month, year] = str.split("-");
        return new Date(`${year}-${month}-${day}`);
    };

    const isViaggioInCorso = (viaggio) => {
        const oggi = new Date();
        const inizio = parseDate(viaggio.dataInizio);
        const fine = parseDate(viaggio.dataFine);
        return oggi >= inizio && oggi <= fine;
    };


    //filtro ricerca-data-incorso viaggi - Fernando
    const viaggiFiltrati = viaggi
        .filter((viaggio) =>
            viaggio.citta.toLowerCase().includes(cercaViaggio.toLowerCase()) &&
            (calendar ? viaggio.dataInizio === formatDatePicker(calendar) : true) &&
            (soloInCorso ? isViaggioInCorso(viaggio) : true)
        )
        .map((viaggio) => ({
            ...viaggio,
            inCorso: isViaggioInCorso(viaggio),
        }));




    return (
        <main>
            <h1 className="text-center my-5">TUTTI I VIAGGI</h1>
            <div className="container">
                {/*aggiungo filtro ricerca viaggi - Fernando*/}
                <div className="search-container">
                    <input
                    type="text"
                    className='mb-3 search-trip'
                    id='search'
                    placeholder='Cerca Viaggio...'
                    value={cercaViaggio}
                    onChange={(e) => setCercaViaggio(e.target.value)} />
                </div>
                
                
                <hr />

                {/*filtro per data*/}
                <div className='home-filter-group mb-3'>

                    <button className="filtroSearch btn btn-primary" onClick={() => setShowFiltroSearch(!showFiltroSearch)}>Filtra per Data</button>
                    <AnimatePresence></AnimatePresence>
                    {showFiltroSearch && (
                        <motion.input

                            type='date'
                            id='date'
                            className='filtro-data'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            value={calendar}
                            onChange={(e) => { setCalendar(e.target.value) }} />
                    )}
                    <button className={`btn ${soloInCorso ? "btn-warning" : "btn-outline-primary"}`}
                        onClick={() => setSoloInCorso(!soloInCorso)}>Solo In Corso </button>
                </div>
                <hr />

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {viaggiFiltrati.map((curViaggio) => (
                        <div className="col" key={curViaggio.id}>
                            <ViaggiCard viaggio={curViaggio} />
                        </div>
                    ))}



                </div>
            </div>


        </main>
    )
}