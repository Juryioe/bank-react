import AccountItem from './account-item'

const AccountListItem = ({ users, onRemove, onAddFunds }) => {
  return (
    <>
      {users.length !== 0 &&
        users.map((user, index) => (
          <AccountItem
            key={index}
            index={index}
            user={user}
            onRemove={onRemove}
            onAddFunds={onAddFunds}
          />
        ))}
    </>
  )
}

export default AccountListItem
