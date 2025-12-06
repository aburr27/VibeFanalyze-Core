import { useParams } from "react-router-dom";
import { useBetSlip } from "../context/BetSlipContext";
import type { ModelPick } from "../types/bets";

export const GameDetailPage = () => {
const { gameId = "" } = useParams();
const { addPick } = useBetSlip();

  // In v1, mock it. Later: fetch(`/api/games/${gameId}`)
const game = {
    id: gameId,
    sport: "NFL",
    leagueLabel: "NFL Week 14",
    homeTeam: "Philadelphia Eagles",
    awayTeam: "Dallas Cowboys",
    startTime: "2025-12-08T19:20:00-06:00",
    stadium: "Lincoln Financial Field",
};

const picks: ModelPick[] = [
    {
    id: "pick-main-ml",
    gameId,
    market: "moneyline",
    selection: "DAL ML",
    oddsAmerican: +135,
    impliedEdgePct: 0.062,
    kellyFraction: 0.035,
    confidence: "High",
    reasoning:
        "Model favors Dallas due to offensive efficiency vs PHI secondary injuries and recent pressure rate trends.",
    },
    {
    id: "pick-alt-spread",
    gameId,
    market: "spread",
    selection: "DAL +3.5",
    oddsAmerican: -110,
    impliedEdgePct: 0.038,
    kellyFraction: 0.022,
    confidence: "Medium",
    reasoning:
        "Spread still offers value if DAL keeps it within a field goal; volatility slightly reduces Kelly fraction.",
    },
    {
    id: "pick-total",
    gameId,
    market: "total",
    selection: "Over 47.5",
    oddsAmerican: -105,
    impliedEdgePct: 0.029,
    kellyFraction: 0.015,
    confidence: "Low",
    reasoning:
        "Both offenses project above league-average pace, but weather risk caps expected edge.",
    },
];

  const formatEdgePct = (value: number) => (value * 100).toFixed(1) + "%";

  const formatKellyPct = (value: number) => (value * 100).toFixed(1) + "%";

const formatConfidenceBadge = (confidence: string) => {
    const baseClass = "badge pill";
    if (confidence === "High") return baseClass + " badge-high";
    if (confidence === "Medium") return baseClass + " badge-medium";
    return baseClass + " badge-low";
};

return (
    <div className="page">
      {/* Header */}
    <header className="game-header card">
        <div>
        <p className="muted">{game.leagueLabel}</p>
        <h1>
            {game.awayTeam} @ {game.homeTeam}
        </h1>
        <p>{game.stadium}</p>
        </div>
        <div className="game-header-meta">
        <p>Kickoff:</p>
        <p>
            <strong>Sun 7:20 PM</strong>
        </p>
        <p className="muted">(auto-format this from ISO string later)</p>
        </div>
    </header>

      {/* Picks */}
    <section className="card">
        <h2>Model Picks</h2>
        <p className="muted">
        These recommendations are based on your current model inputs. Add
        them to your Bet Slip to size stakes using your bankroll and risk
        profile.
        </p>

        <table className="table">
        <thead>
            <tr>
            <th>Market</th>
            <th>Selection</th>
            <th>Odds</th>
            <th>Edge</th>
            <th>Kelly %</th>
            <th>Confidence</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            {picks.map((pick) => (
            <tr key={pick.id}>
                <td>{pick.market}</td>
                <td>{pick.selection}</td>
                <td>
                {pick.oddsAmerican > 0 ? `+${pick.oddsAmerican}` : pick.oddsAmerican}
                </td>
                <td className="text-positive">
                +{formatEdgePct(pick.impliedEdgePct)}
                </td>
                <td>{formatKellyPct(pick.kellyFraction)}</td>
                <td>
                <span className={formatConfidenceBadge(pick.confidence)}>
                    {pick.confidence}
                </span>
                </td>
                <td>
                <button
                    className="btn-primary"
                    onClick={() => addPick(pick)}
                >
                    Add to Bet Slip
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </section>

      {/* Explanations */}
    <section className="grid">
        {picks.map((pick) => (
        <article key={pick.id} className="card">
            <h3>{pick.selection}</h3>
            <p className="muted">
            Market: <strong>{pick.market}</strong> – Edge:{" "}
            <span className="text-positive">
                +{formatEdgePct(pick.impliedEdgePct)}
            </span>
            </p>
            <p>{pick.reasoning}</p>
        </article>
        ))}
    </section>
    </div>
);
};
