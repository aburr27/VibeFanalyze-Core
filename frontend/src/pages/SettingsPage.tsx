import { useBetSlip } from "../context/BetSlipContext";
import "./SettingsPage.css";

export const SettingsPage = () => {
const { bankroll, riskProfile, setBankroll, setRiskProfile } = useBetSlip();

const updateBankroll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseFloat(e.target.value);
    if (!Number.isNaN(value)) setBankroll(value);
};

return (
    <div className="page">
    <h2>Settings</h2>
    <p className="muted">
        Customize your bankroll, risk behavior, and default preferences.
    </p>

    <div className="card card-with-margin">
        <div className="settings-section">
        <label htmlFor="bankroll-input" className="label">
            Bankroll
            <input
                id="bankroll-input"
                type="number"
                value={bankroll}
                onChange={updateBankroll}
                className="input bankroll-input"
                min={0}
                placeholder="Enter your bankroll"
            />
        </label>
        </div>

        {/* RISK PROFILE */}
        <fieldset className="settings-section">
        <legend className="label">Risk Profile</legend>
        <div className="pill-group">
            {(["conservative", "standard", "aggressive"] as const).map(level => (
            <button
                key={level}
                className={
                "pill-button" +
                (riskProfile === level ? " pill-button-active" : "")
                }
                type="button"
                onClick={() => setRiskProfile(level)}
            >
                {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
            ))}
        </div>
        </fieldset>
        {/* FUTURE SETTINGS PLACEHOLDER */}
        {/* FUTURE SETTINGS PLACEHOLDER */}
        <div className="settings-future">
        <h4>Coming Soon</h4>
            <ul>
            <li>- Odds format (American / Decimal / Fractional)</li>
            <li>- Book selection syncing</li>
            <li>- User login & cloud sync</li>
            <li>- Personalized alerts</li>
            </ul>
        </div>
    </div>
    </div>
);
};
