import 'bootstrap/dist/css/bootstrap.min.css'
import './account-list.scss'
import AccountListItem from '../account-list-item/account-list-item'
import Header from '../header/header'

const AcountList = ({ users, onRemove }) => {
  return (
    <table className="styled-table">
      <Header />
      <tbody>
        <AccountListItem users={users} onRemove={onRemove} />
      </tbody>
    </table>
  )
}

export default AcountList
