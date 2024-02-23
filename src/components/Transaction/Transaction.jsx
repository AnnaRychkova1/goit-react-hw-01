import css from './Transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.tableDescrType}>{type}</td>
      <td className={css.tableDescr}>{amount}</td>
      <td className={css.tableDescr}>{currency}</td>
    </>
  );
};

export default Transaction;
