import { useRef } from 'react'

const AccountItem = ({ index, user, onRemove, onAddFunds }) => {
  const inputValue = useRef()

  return (
    <>
      <tr>
        <td>{++index}</td>
        <td className="user-name">{user.userName}</td>
        <td className="user-last-name">{user.userSurname}</td>
        <td>{user.balance}</td>
        <td className="input">
          <input
            type="number"
            ref={inputValue}
            placeholder="EUR"
            className="form-control"
          />
          <div className="btn-group">
            <button
              onClick={() => {
                onAddFunds(
                  user.id,
                  user.balance + Number(inputValue.current.value)
                )
                inputValue.current.value = ''
              }}
              className="btn btn-outline-success btn-sm"
            >
              Pridėti
            </button>
            <button
              onClick={() => {
                onAddFunds(
                  user.id,
                  user.balance - Number(inputValue.current.value)
                )
                inputValue.current.value = ''
              }}
              className="btn btn-outline-secondary btn-sm"
            >
              Atimti
            </button>
          </div>
        </td>
        <td>
          <button
            onClick={() => onRemove(user.id)}
            className="btn btn-outline-danger btn-sm"
          >
            Ištrinti
          </button>
        </td>
      </tr>
    </>
  )
}

export default AccountItem
