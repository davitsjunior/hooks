import React, { useState } from "react"

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppConstext = React.createContext(initialState)

const Store = props => {
    const [state, setState] = useState(initialState)

    function updateState(key, value){
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppConstext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {props.children}
        </AppConstext.Provider>
    )
}

export default Store