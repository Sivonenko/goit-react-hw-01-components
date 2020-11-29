
import PropTypes from 'prop-types';
import s from './Transaction.module.scss'

const TransactionsTr = ({id, type, amount, currency}) => {
  return (
         <tr key={id}>
      <th>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
    )
}

const TransactionsBody = ({items}) => {
    if (items === 0) return null
    return <tbody className={s.tbody}>{items.map(TransactionsTr)}</tbody>
}

const Transactions = ({ transactions }) => {
    return (
        <table className={s.transactionsHistory}>
  <thead className={s.thad}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <TransactionsBody items={transactions}/>
  
</table>
    )
}

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default Transactions