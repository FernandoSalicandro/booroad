import {createContext, useState} from 'react';
import viaggiIniziali from '../datas/Viaggi.js';

export const ViaggiContext = createContext();

export const ViaggiProvider = ({children}) => {
const [viaggi, setViaggi] = useState(viaggiIniziali);
return (
    <ViaggiContext.Provider value={{viaggi, setViaggi}}>
        {children}
    </ViaggiContext.Provider>
)
}