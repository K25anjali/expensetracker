import { useState } from "react";
import { Transaction } from "./Transaction";

export const Expense = ({ setTransactions }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("EXPENSE");
  const [transactions, updateTranscation] = useState([]);

  const addTranscation = () => {
    if (!amount || !category || !type) {
      alert("Please fill all fields");
      return;
    }

    console.log(type);
    const newTransaction = {
      id: transactions.length + 1,
      amount: amount,
      category: category,
      type: type,
    };

    updateTranscation([...transactions, newTransaction]);
    setTransactions([...transactions, newTransaction]);
     setAmount("");
    setCategory("");
    setType("EXPENSE");
    };

  return (
    <div className=" bg-yellow-700 flex justify-center text-base text-blue-950 rounded-md shadow-lg mt-5">
      <div className="w-[500px] m-8">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full outline-none my-3 rounded-md shadow-lg p-2"
        />
        <br />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full outline-none my-3 rounded-md shadow-lg p-2"
        />
        <div className="flex font-semibol text-gray-100 gap-1 my-3">
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="expense">EXPENSE</label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
            className="ml-6"
          />
          <label htmlFor="income">INCOME</label>
        </div>
        <button
          onClick={addTranscation}
          className="bg-blue-950 rounded-md shadow-lg text-gray-100 p-3 mt-3"
        >
          Add Transaction
        </button>
      </div>

      <div>
        {transactions.length
          ? transactions.map((transaction, index) => (
              <Transaction
                key={index}
                transaction={transaction}
                onDelete={(id) => {
                  const update = transactions.filter(
                    (transaction) => transaction.id !== id
                  );
                  updateTranscation(update);
                }}
              />
            ))
          : ""}
      </div>
      
    </div>
  );
};
