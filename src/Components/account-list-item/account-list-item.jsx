const AccountListItem = ({ users, onRemove }) => {
  return (
    <>
      {users.length > 0 ? (
        users.map((user, index) => (
          <tr key={index}>
            <td>{++index}</td>
            <td className="user-name">{user.userName}</td>
            <td className="user-last-name">{user.userSurname}</td>
            <td>{user.balance}</td>
            <td className="input">
              <input
                placeholder="EUR"
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
              <div className="btn-group">
                <button className="btn btn-outline-success btn-sm">
                  Pridėti
                </button>
                <button className="btn btn-outline-secondary btn-sm">
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
        ))
      ) : (
        <tr>
          <td>Nėra duomenų</td>
        </tr>
      )}
    </>
  )
}

export default AccountListItem
