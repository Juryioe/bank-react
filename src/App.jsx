import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import AcountList from './Components/account-list/account-list'
import { useState, useRef } from 'react'

function App() {
  const getLocalStorage = (key) => {
    const value = localStorage.getItem(key)
    if (null === value) {
      return []
    }
    return JSON.parse(value)
  }
  const [users, setUsers] = useState(() => getLocalStorage('data') || [])
  const username = useRef('')
  const surname = useRef('')

  const handleSubmitUser = (e) => {
    e.preventDefault()
    const isFilledFields =
      username.current.value !== '' && surname.current.value !== ''
    if (isFilledFields) {
      const userData = {
        id: Math.floor(Math.random() * 100),
        userName: username.current.value,
        userSurname: surname.current.value,
        balance: 0,
      }
      setUsers((prevState) => [...prevState, userData])

      username.current.value = ''
      surname.current.value = ''
    }
  }

  const handleResetFields = () => {
    username.current.value = ''
    surname.current.value = ''
  }

  const onRemoveHandler = (id) => {
    setUsers((prev) => prev.filter((e) => e.id !== id))
  }

  const onBalanceHandler = (id, balance) => {
    console.log(id, balance)
    setUsers((prev) =>
      prev.map((acc) => {
        if (acc.id === id) {
          acc.balance = balance
          return acc
        }
        return acc
      })
    )
  }

  const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  setLocalStorage('data', users)

  return (
    <div className="app">
      <div className="new-acc">
        <form onSubmit={handleSubmitUser}>
          <input
            ref={username}
            placeholder="Vardas"
            type="text"
            className="form-control"
          />
          <input
            ref={surname}
            placeholder="Pavardė"
            type="text"
            className="form-control"
          />
          <button type="submit" className="btn btn-outline-success">
            Pridėti
          </button>
          <button
            type="button"
            onClick={handleResetFields}
            className="btn btn-outline-secondary"
          >
            Anuliuoti
          </button>
        </form>
      </div>
      <AcountList
        users={users}
        onRemove={onRemoveHandler}
        onAddFunds={onBalanceHandler}
      />
    </div>
  )
}
export default App
