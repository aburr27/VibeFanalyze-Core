import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
return (
    <aside className="sidebar">
    <div className="sidebar-logo">
        <span className="logo-mark">VF</span>
        <span className="logo-text">Vibe-Fanalyze</span>
    </div>

    <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item">
        🏠 Dashboard
        </NavLink>
        <NavLink to="/sports/nfl" className="nav-item">
        🏈 NFL
        </NavLink>
        <NavLink to="/sports/nba" className="nav-item">
        🏀 NBA
        </NavLink>
        <NavLink to="/sports/mlb" className="nav-item">
        ⚾ MLB
        </NavLink>
        <NavLink to="/sports/nhl" className="nav-item">
        🏒 NHL
        </NavLink>
        <NavLink to="/sports/ufc" className="nav-item">
        🥊 UFC
        </NavLink>
        <NavLink to="/bet-slip" className="nav-item">
        🧾 Bet Slip
        </NavLink>
        <NavLink to="/history" className="nav-item">
        📈 History
        </NavLink>
        <NavLink to="/settings" className="nav-item">
        ⚙️ Settings
        </NavLink>
    </nav>
    </aside>
);
};
