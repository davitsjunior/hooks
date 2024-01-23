
import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { login, numberAdd2 } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    :
                    <span className="text">"Sem Usuário"</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() =>  login(dispatch, 'Davi Gabriel')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'mult7' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'div25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parse' })}>Parse</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addNum', payload: document.getElementById("numero") })}>Enviar Numero</button>
                    <input type="text" className="input" id='numero' />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
