import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense, onRemoveExpense }) => {
  return (
    <li>
      <strong>{expense.title}</strong>{" "}
      <strong>Valor: R$ {expense.amount} </strong>
      Categoria: {expense.category}
      <button onClick={() => onRemoveExpense(expense)}>Remover</button>
    </li>
  );
};

export default ExpenseItem;
