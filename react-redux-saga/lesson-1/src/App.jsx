import { useDispatch, useSelector } from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = (cash) => {
        dispatch({ action: "ADD_CASH", payload: cash })
    }

    const getCash = () => {
        dispatch({ action: "GET_CASH", payload: cash })
    }

    return (
        <div>
            <div>{cash}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            </div>
        </div>
    )
}

export default App