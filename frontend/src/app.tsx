import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { SportsPage } from "./pages/SportsPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { BetSlipPage } from "./pages/BetSlipPage";
import { HistoryPage } from "./pages/HistoryPage";
import { SettingsPage } from "./pages/SettingsPage";
import { BetSlipProvider } from "./context/BetSlipContext";

export default function App() {
return (
    <Router>
    <BetSlipProvider>
        <Layout>
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/sports/:sportId" element={<SportsPage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
            <Route path="/bet-slip" element={<BetSlipPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        </Layout>
    </BetSlipProvider>
    </Router>
);
}
