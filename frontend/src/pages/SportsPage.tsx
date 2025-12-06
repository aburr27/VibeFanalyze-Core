import { useParams } from "react-router-dom";

const SPORT_LABELS: Record<string, string> = {
nfl: "NFL",
nba: "NBA",
mlb: "MLB",
nhl: "NHL",
ufc: "UFC",
};

export const SportsPage = () => {
const { sportId = "nfl" } = useParams();
const sportLabel = SPORT_LABELS[sportId] ?? sportId.toUpperCase();

  // later: fetch games from FastAPI based on sportId + date
const mockGames = [
    {
    id: "game-1",
    matchup: "Cowboys @ Eagles",
    startTime: "7:20 PM",
    pick: "DAL ML",
    edge: "6.2%",
    confidence: "High",
    },
    {
    id: "game-2",
    matchup: "Chiefs @ Chargers",
    startTime: "3:25 PM",
    pick: "KC -3.5",
    edge: "4.1%",
    confidence: "Medium",
    },
];

return (
    <div className="page">
    <h2>{sportLabel} – Today&apos;s Games</h2>

    <table className="table">
        <thead>
        <tr>
            <th>Matchup</th>
            <th>Start</th>
            <th>Model Pick</th>
            <th>Edge</th>
            <th>Confidence</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {mockGames.map((game) => (
            <tr key={game.id}>
            <td>{game.matchup}</td>
            <td>{game.startTime}</td>
            <td>{game.pick}</td>
            <td>{game.edge}</td>
            <td>{game.confidence}</td>
            <td>
                <button className="btn-secondary">View Game</button>
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};
