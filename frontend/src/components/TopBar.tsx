export const TopBar = () => {
return (
    <header className="topbar">
    <div className="topbar-left">
        <h1 className="topbar-title">Today&apos;s Edge</h1>
        {/* later: add sport/date selectors here */}
    </div>
    <div className="topbar-right">
        {/* placeholder; later: bankroll summary, user menu */}
        <div className="bankroll-chip">
        Bankroll: <strong>$2,500</strong>
        </div>
    </div>
    </header>
);
};
