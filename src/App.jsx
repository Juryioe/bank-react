import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import AcountList from './Components/account-list/account-list'

import { useState, useRef } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const username = useRef('')
  const surname = useRef('')

  const handleSubmitUser = (e) => {
    e.preventDefault()
    const isFilledFields =
      username.current.value !== '' && surname.current.value !== ''
    if (isFilledFields) {
      console.log(username.current.value)
      const userData = {
        id: Math.floor(Math.random() * 100),
        userName: username.current.value,
        userSurname: surname.current.value,
        balance: 0,
      }
      setUsers((prevState) => [...prevState, userData])

      username.current.value = ''
      surname.current.value = ''
    } else {
      alert('Atsiprašau už alertą, prašau užpildyti visus laukus')
    }
  }

  const handleResetFields = () => {
    username.current.value = ''
    surname.current.value = ''
  }

  const onRemoveHandler = (id) => {
    setUsers((prev) => prev.filter((e) => e.id !== id))
  }

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
      <AcountList users={users} onRemove={onRemoveHandler} />
    </div>
  )
}
export default App
