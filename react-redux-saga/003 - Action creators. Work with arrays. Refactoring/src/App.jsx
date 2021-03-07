import { useDispatch, useSelector } from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    const customers = useSelector(state => state.customerReducer.customers)

    const addCash = (cash) => {
        dispatch({ action: "ADD_CASH", payload: cash })
    }

    const getCash = () => {
        dispatch({ action: "GET_CASH", payload: cash })
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div>
            <div>Баланс: {cash}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(Number(prompt()))}>Добавить клиента</button>
            </div>
            { customers.length > 0 ?
                <div>
                    {customers.map(customer => {
                        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
                    })}
                </div>
                :
                <div>
                    Клиенты отсутствуют
                </div>
            }
        </div>
    )
}

export default App