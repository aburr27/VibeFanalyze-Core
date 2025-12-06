import { Link } from "react-router-dom";
import { useBetSlip } from "../context/BetSlipContext";

export const DashboardPage = () => {
const { bankroll } = useBetSlip();

  // mock stats – later you’ll fetch from FastAPI
const startingBankroll = 2000;
  const currentBankroll = bankroll; // or from backend
const profit = currentBankroll - startingBankroll;
  const roi = (profit / startingBankroll) * 100;

const todaysEdges = [
    {
    id: "pick-nfl-1",
    gameId: "game-nfl-dal-phi",
    label: "DAL @ PHI – DAL ML",
    sport: "NFL",
    edgePct: 6.2,
    kickoff: "7:20 PM",
    },
    {
    id: "pick-nba-1",
    gameId: "game-nba-lal-bos",
    label: "LAL vs BOS – Over 228.5",
    sport: "NBA",
    edgePct: 4.8,
    kickoff: "9:00 PM",
    },
    {
    id: "pick-mlb-1",
    gameId: "game-mlb-nyy-bos",
    label: "NYY @ BOS – NYY RL -1.5",
    sport: "MLB",
    edgePct: 3.9,
    kickoff: "6:05 PM",
    },
];

const sportPerformance = [
    { sport: "NFL", roi: 18.3 },
    { sport: "NBA", roi: 12.1 },
    { sport: "MLB", roi: -3.4 },
    { sport: "UFC", roi: 25.7 },
];

return (
    <div className="page">
    <section className="grid">
        {/* Bankroll Card */}
        <div className="card">
        <h2>Bankroll Overview</h2>
        <p>
            Starting Bankroll: <strong>${startingBankroll.toFixed(2)}</strong>
        </p>
        <p>
            Current Bankroll: <strong>${currentBankroll.toFixed(2)}</strong>
        </p>
        <p>
            Profit/Loss:{" "}
            <strong className={profit >= 0 ? "text-positive" : "text-negative"}>
            {profit >= 0 ? "+" : "-"}${Math.abs(profit).toFixed(2)}
            </strong>
        </p>
        <p>
            ROI:{" "}
            <strong className={roi >= 0 ? "text-positive" : "text-negative"}>
            {roi >= 0 ? "+" : "-"}
            {Math.abs(roi).toFixed(1)}%
            </strong>
        </p>
        </div>

        {/* Today's Edges */}
        <div className="card">
        <h2>Today&apos;s Top Edges</h2>
        <ul className="list-vertical">
            {todaysEdges.map((edge) => (
            <li key={edge.id} className="list-item">
                <div className="list-main">
                <span className="badge">{edge.sport}</span>
                <span>{edge.label}</span>
                </div>
                <div className="list-meta">
                <span>{edge.kickoff}</span>
                <span className="text-positive">
                    +{edge.edgePct.toFixed(1)}% edge
                </span>
                <Link
                    to={`/games/${edge.gameId}`}
                    className="btn-link"
                >
                    View game
                </Link>
                </div>
            </li>
            ))}
        </ul>
        </div>

        {/* Performance by Sport */}
        <div className="card">
        <h2>Performance by Sport</h2>
        <table className="table compact">
            <thead>
            <tr>
                <th>Sport</th>
                <th>ROI</th>
            </tr>
            </thead>
            <tbody>
            {sportPerformance.map((row) => (
                <tr key={row.sport}>
                <td>{row.sport}</td>
                <td
                    className={
                    row.roi >= 0 ? "text-positive" : "text-negative"
                    }
                >
                    {row.roi >= 0 ? "+" : ""}
                    {row.roi.toFixed(1)}%
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <p className="muted">
            (Later: replace with a real mini chart from backend stats.)
        </p>
        </div>
    </section>
    </div>
);
};
