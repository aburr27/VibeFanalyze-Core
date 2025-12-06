export type SportId = "nfl" | "nba" | "mlb" | "nhl" | "ufc";

export type BetConfidence = "Low" | "Medium" | "High";

export interface GameSummary {
id: string;
sport: SportId;
homeTeam: string;
awayTeam: string;
  startTime: string; // ISO or display string
  leagueLabel: string; // e.g. "NFL Week 14"
}

export interface ModelPick {
id: string;
gameId: string;
market: "moneyline" | "spread" | "total" | "prop";
  selection: string; // e.g. "DAL -3.5", "Over 228.5", "LAL ML"
  oddsAmerican: number; // e.g. -110, +150
  impliedEdgePct: number; // e.g. 0.062 for 6.2%
  kellyFraction: number; // raw Kelly fraction (0.03 = 3% of bankroll)
confidence: BetConfidence;
reasoning: string;
}
