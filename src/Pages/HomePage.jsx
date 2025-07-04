import Viaggi from '../datas/Viaggi.js';
import ViaggiCard from '../Components/ViaggiCard.jsx';
import { useState} from 'react';
export default function Homepage() {

    const [viaggi, setViaggi] = useState(Viaggi);
    const [cercaViaggio, setCercaViaggio] = useState('');

    //filtro ricerca viaggi - Fernando
    const filtroRicercaViaggio = viaggi.filter(viaggio => viaggio.citta.toLowerCase().includes(cercaViaggio.toLowerCase()))
   


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
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cercaViaggio.length > 0 ? filtroRicercaViaggio.map(curViaggio => {
                        return (
                            <div className="col" key={curViaggio.id}>
                                <ViaggiCard viaggio={curViaggio} />
                            </div>
                        )
                    }) : viaggi.map(curViaggio => {
                        return (
                            <div className="col" key={curViaggio.id}>
                                <ViaggiCard viaggio={curViaggio} />
                            </div>
                        )
                    }) }
                </div>
            </div>
        </main>
    )
}