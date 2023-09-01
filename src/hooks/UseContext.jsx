import React, { useContext } from 'react'
import Title from './Title'
import DataContext from '../data/dataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta,
        })
    }

    const { number, text, setNumber } = useContext(AppContext)

    return (
        <div className="UseContext">
            <Title
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <Title title="Execício #01" />
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>
                        -1
                    </button>
                    <button className="btn" onClick={() => addNumber(1)}>
                        +1
                    </button>
                </div>
            </div>

            <Title title="Execício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => setNumber(number - 1)}>
                        -1
                    </button>
                    <button
                        className="btn"
                        onClick={() => setNumber(number + 1)}>
                        +1
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
