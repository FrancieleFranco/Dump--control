import React, { useState } from "react";
import Header from "../src/components/header/header";
import ExpenseForm from "../src/components/expenseForm/ExpenseForm";
import ExpenseList from "../src/components/expenseList/ExpenseList";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (expenseToRemove) => {
    setExpenses(expenses.filter((expense) => expense !== expenseToRemove));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredExpenses = filter
    ? expenses.filter((expense) => expense.category === filter)
    : expenses;

  return (
    <div>
      <Header title="Controle de Despesas" />
      <div className="formControl">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList
          expenses={filteredExpenses}
          onRemoveExpense={removeExpense}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
