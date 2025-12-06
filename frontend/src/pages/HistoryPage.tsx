import { useState } from "react";
import "./HistoryPage.css";

export const HistoryPage = () => {
  // For now: mock history data (replace with backend fetch later)
const [history] = useState([
    {
    id: "1",
    date: "Dec 1, 2025",
    selection: "DAL ML",
    odds: "+135",
    stake: 50,
    result: "Win",
    profit: 67.5,
    sport: "NFL",
    },
    {
    id: "2",
    date: "Dec 1, 2025",
    selection: "LAL O228.5",
    odds: "-110",
    stake: 40,
    result: "Loss",
    profit: -40,
    sport: "NBA",
    },
    {
    id: "3",
    date: "Nov 30, 2025",
    selection: "UFC - Oliveira Submission",
    odds: "+220",
    stake: 25,
    result: "Win",
    profit: 55,
    sport: "UFC",
    },
]);

const totalProfit = history.reduce((sum, item) => sum + item.profit, 0);

return (
    <div className="page">
    <h2>Bet History</h2>
    <p className="muted">
        Track your outcomes, performance trends, and profit history.
    </p>
    <div className="card summary-card">
        <h3>Summary</h3>
        <p>
        Total Bets: <strong>{history.length}</strong>
        </p>
        <p>
        Net Result:{" "}
        <strong className={totalProfit >= 0 ? "text-positive" : "text-negative"}>
            {totalProfit >= 0 ? "+" : "-"}${Math.abs(totalProfit).toFixed(2)}
        </strong>
        </p>
    </div>
    <table className="table history-table">
        <thead>
        <tr>
            <th>Date</th>
            <th>Pick</th>
            <th>Odds</th>
            <th>Stake</th>
            <th>Sport</th>
            <th>Result</th>
            <th>P/L</th>
        </tr>
        </thead>
        <tbody>
        {history.map(item => (
            <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.selection}</td>
            <td>{item.odds}</td>
            <td>${item.stake}</td>
            <td>{item.sport}</td>
            <td>
                <strong
                className={item.result === "Win" ? "text-positive" : "text-negative"}
                >
                {item.result}
                </strong>
            </td>
            <td
                className={item.profit >= 0 ? "text-positive" : "text-negative"}
            >
                {item.profit >= 0 ? "+" : "-"}${Math.abs(item.profit)}
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};
