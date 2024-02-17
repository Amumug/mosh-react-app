import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 12, category: "Utilities" },
    { id: 3, description: "aac", amount: 15, category: "Utilities" },
    { id: 2, description: "aab", amount: 14, category: "Utilities" },

  ]);
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
