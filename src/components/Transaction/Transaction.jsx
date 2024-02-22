import css from './Transaction.module.css';
import clsx from 'clsx';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={clsx(css.tableDescr, css.tableType)}>{type}</td>
      <td className={css.tableDescr}>{amount}</td>
      <td className={clsx(css.tableDescr, css.tableCurrency)}>{currency}</td>
    </>
  );
};

export default Transaction;
