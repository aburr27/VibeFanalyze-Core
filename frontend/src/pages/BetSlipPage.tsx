import { useBetSlip, RiskProfile } from "../context/BetSlipContext";

export const BetSlipPage = () => {
const {
    bankroll,
    riskProfile,
    items,
    setBankroll,
    setRiskProfile,
    removeItem,
    clearSlip,
} = useBetSlip();

const totalStake = items.reduce((sum, item) => sum + item.stake, 0);
  // simple EV approx: stake * edge% * odds (you’ll replace w/ real calc)
const estimatedEV = items.reduce((sum, item) => {
    const edge = item.pick.impliedEdgePct;
    return sum + item.stake * edge;
}, 0);

const handleRiskChange = (value: RiskProfile) => setRiskProfile(value);

const handleBankrollChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number.parseFloat(e.target.value);
    if (Number.isNaN(val)) return;
    setBankroll(val);
};

return (
    <div className="page">
    <section className="card">
        <h2>Bet Slip</h2>
        <p className="muted">
        Stake sizing is based on your bankroll and risk profile using your
        model&apos;s Kelly fractions.
        </p>

        {/* Controls */}
        <div className="bet-settings">
        <div>
            <label htmlFor="bankroll" className="label">Bankroll</label>
            <input
            id="bankroll"
            type="number"
            value={bankroll}
            onChange={handleBankrollChange}
            className="input"
            min={0}
            placeholder="Enter bankroll amount"
            />
        </div>

        <div>
            <label htmlFor="risk-profile" className="label">Risk Profile</label>
            <div className="pill-group" id="risk-profile">
            <button
                type="button"
                className={
                "pill-button" +
                (riskProfile === "conservative" ? " pill-button-active" : "")
                }
                onClick={() => handleRiskChange("conservative")}
            >
                Conservative
            </button>
            <button
                type="button"
                className={
                "pill-button" +
                (riskProfile === "standard" ? " pill-button-active" : "")
                }
                onClick={() => handleRiskChange("standard")}
            >
                Standard
            </button>
            <button
                type="button"
                className={
                "pill-button" +
                (riskProfile === "aggressive" ? " pill-button-active" : "")
                }
                onClick={() => handleRiskChange("aggressive")}
            >
                Aggressive
            </button>
            </div>
        </div>
        </div>

        {/* Slip List */}
        {items.length === 0 ? (
        <p className="muted">No picks added yet. Add picks from a game page.</p>
        ) : (
        <table className="table">
            <thead>
            <tr>
                <th>Selection</th>
                <th>Odds</th>
                <th>Edge</th>
                <th>Stake</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map((item) => {
                const { pick } = item;
                return (
                <tr key={item.id}>
                    <td>
                    <strong>{pick.selection}</strong>
                    <div className="muted">Market: {pick.market}</div>
                    </td>
                    <td>
                    {pick.oddsAmerican > 0
                        ? `+${pick.oddsAmerican}`
                        : pick.oddsAmerican}
                    </td>
                    <td className="text-positive">
                      +{(pick.impliedEdgePct * 100).toFixed(1)}%
                    </td>
                    <td>${item.stake.toFixed(2)}</td>
                    <td>
                    <button
                        className="btn-ghost"
                        onClick={() => removeItem(item.id)}
                    >
                        ✕
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        )}

        {/* Summary */}
        <div className="bet-summary">
        <div>
            <p>Total Stake</p>
            <p>
            <strong>${totalStake.toFixed(2)}</strong>
            </p>
        </div>
        <div>
            <p>Estimated Edge EV*</p>
            <p className={estimatedEV >= 0 ? "text-positive" : "text-negative"}>
            {estimatedEV >= 0 ? "+" : "-"}${Math.abs(estimatedEV).toFixed(2)}
            </p>
        </div>
        <div className="bet-summary-note">
            <p className="muted">
              *This is a rough estimate using edge% and stake; replace with your
            engine&apos;s expected value/output.
            </p>
        </div>
        </div>

        <div className="bet-actions">
        <button
            className="btn-ghost"
            type="button"
            onClick={() => clearSlip()}
            disabled={items.length === 0}
        >
            Clear Slip
        </button>
        <button
            className="btn-primary"
            type="button"
            disabled={items.length === 0}
        >
            Export / Log Bets (future)
        </button>
        </div>
    </section>
    </div>
);
};
