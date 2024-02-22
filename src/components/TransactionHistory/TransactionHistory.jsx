import Transaction from '../Transaction/Transaction';
import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableTitles}>
        <tr className={css.tableRow}>
          <th className={css.tableTitle}>Type</th>
          <th className={css.tableTitle}>Amount</th>
          <th className={css.tableTitle}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {items.map(item => {
          return (
            <tr className={css.tableRow} key={item.id}>
              <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
