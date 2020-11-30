
import PropTypes from 'prop-types';
import s from './Transaction.module.scss'

const TransactionsTr = ({id, type, amount, currency}) => {
  return (
         <tr className={s.tr} key={id}>
      <td className={s.row}>{type}</td>
      <td className={s.row}>{amount}</td>
      <td className={s.row}>{currency}</td>
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
      <th className={s.title}>Type</th>
      <th className={s.title}>Amount</th>
      <th className={s.title}>Currency</th>
    </tr>
  </thead>

            <TransactionsBody items={transactions}/>
  
</table>
    )
}

TransactionsTr.propTypes = {
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