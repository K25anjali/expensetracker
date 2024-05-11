import { useState } from "react";
import { Expense } from "./components/Expense";


function App() {
  const [transactions, setTransactions] = useState([]);

  const totalExpense = transactions.reduce((acc, curr) => {
    if (curr.type === "EXPENSE") {
      return acc + parseFloat(curr.amount);
    }
    return acc;
  }, 0);

  const totalIncome = transactions.reduce((acc, curr) => {
    if (curr.type === "INCOME") {
      return acc + parseFloat(curr.amount);
    }
    return acc;
  }, 0);

  const savings = totalIncome - totalExpense;
  // const expensePercentage = (totalExpense / totalIncome) * 100;
  // const incomePercentage = (totalIncome / totalIncome) * 100;
  // const savingPercentage = (savings / totalIncome) * 100;
  return (
    <div className="text-lg flex flex-wrap justify-center item-center text-center text-blue-950 bg-stone-500 h-[100vh]">
      <div className=" bg-gray-300 text-blue w-[800px] rounded-lg shadow-xl gap-y-4 p-8 m-10 text-gray-300">
        <header className="bg-yellow-700 text-2xl font-semibold">
          Expense Tracker
        </header>

        <div className="flex flex-wrap my-5 justify-between font-medium ">
          <p className="bg-green-500 p-3  rounded-md shadow-lg">
            Your Balance: Rs {savings}
          </p>
          <p className="p-3 bg-green-500  rounded-md shadow-lg">Welcome! 🙏</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <h1 className="bg-red-800 px-8 py-2 rounded-md shadow-lg">
            Expense: <br />
            Rs {totalExpense}
          </h1>
          <h1 className="bg-green-800 px-8 py-2 rounded-md shadow-lg">
            Income: <br />
            Rs {totalIncome}
          </h1>
        </div>

        <div>
          <Expense
            setTransactions={setTransactions}
            // incomePercentage={incomePercentage}
            // expensePercentage={expensePercentage}
            // savingPercentage={savingPercentage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
