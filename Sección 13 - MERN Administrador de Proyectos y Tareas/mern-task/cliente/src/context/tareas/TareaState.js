import React, {useReducer} from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

const TareaState = props => {
    const initialState = {
        tareas: [],
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return(
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;