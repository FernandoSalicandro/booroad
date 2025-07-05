import ViaggiCard from '../Components/ViaggiCard.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { ViaggiContext } from '../GlobalContext/ViaggiContext.jsx';

export default function Homepage() {

    const { viaggi } = useContext(ViaggiContext);
    const [cercaViaggio, setCercaViaggio] = useState('');
    const [showFiltroSearch, setShowFiltroSearch] = useState(false);
    const [calendar, setCalendar] = useState('');

    //funzione per trasformare il formato del date picker

    const formatDatePicker = (str) => {
        const [year, month, day] = str.split('-')
        const formatted = `${day}-${month}-${year}`
        return formatted
    }

    //filtro ricerca viaggi - Fernando
    const filtroRicercaViaggio = viaggi.filter(viaggio => viaggio.citta.toLowerCase().includes(cercaViaggio.toLowerCase()))
    const filtroPerData = viaggi.filter(viaggio => viaggio.dataInizio === formatDatePicker(calendar)
);



    return (
        <main>
            <h1 className="text-center my-5">TUTTI I VIAGGI</h1>
            <div className="container">
                {/*aggiungo filtro ricerca viaggi - Fernando*/}
                <input
                    type="text"
                    className='mb-3 search-trip'
                    id='search'
                    placeholder='Cerca Viaggio...'
                    value={cercaViaggio}
                    onChange={(e) => setCercaViaggio(e.target.value)} />
                <hr />

                {/*filtro per data*/}
                <div className='d-flex justify-content-start align-items-center mb-3'>

                    <button className="filtroSearch btn btn-primary" onClick={() => setShowFiltroSearch(!showFiltroSearch)}>Filtra per Data</button>
                    <AnimatePresence></AnimatePresence>
                    {showFiltroSearch && (
                        <motion.input

                            type='date'
                            id='date'
                            className='filtro-data mx-1'
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            value={calendar}
                            onChange={(e) => { setCalendar(e.target.value)}} />
                    )}
                </div>
                <hr />

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {calendar
                        ? filtroPerData.map(curViaggio => (
                            <div className="col" key={curViaggio.id}>
                                <ViaggiCard viaggio={curViaggio} />
                            </div>
                        ))
                        : cercaViaggio.length > 0
                            ? filtroRicercaViaggio.map(curViaggio => (
                                <div className="col" key={curViaggio.id}>
                                    <ViaggiCard viaggio={curViaggio} />
                                </div>
                            ))
                            : viaggi.map(curViaggio => (
                                <div className="col" key={curViaggio.id}>
                                    <ViaggiCard viaggio={curViaggio} />
                                </div>
                            ))
                    }


                </div>
            </div>


        </main>
    )
}