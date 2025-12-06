"""Utility functions for odds conversion and CSV loading."""
import csv
from typing import List, Dict, Any, Optional
from .models import GameRow

def american_to_decimal(american_odds: str) -> Optional[float]:
    """Convert American odds (e.g. -115, +150) to decimal odds (e.g. 1.87, 2.5).
    
    If input is already decimal, try to coerce to float.
    """
    if american_odds is None:
        return None
    s = str(american_odds).strip()
    if s == '':
        return None
    try:
        if s.startswith('+') or s.startswith('-'):
            a = int(s)
            if a > 0:
                return round((a / 100) + 1, 2)
            else:
                return round((100 / abs(a)) + 1, 2)
        # maybe it's already decimal like 1.51
        return float(s)
    except Exception:
        return None

def implied_prob_from_decimal(decimal_odds: float) -> Optional[float]:
    if not decimal_odds or decimal_odds <= 0:
        return None
    return round(1.0 / decimal_odds, 4)

def load_games_from_csv(path: str) -> List[GameRow]:
    rows = []

    def safe_float(value: Any, default: Optional[float] = None) -> Optional[float]:
        if value is None:
            return default
        s = str(value).strip()
        if s == '':
            return default
        try:
            return float(s)
        except Exception:
            return default

    def parse_decimal_from_row(r: Dict[str, Any]) -> Optional[float]:
        # try American odds first, then Decimal Odds field
        dec = american_to_decimal(r.get('Odds Offered'))
        if dec is not None:
            return dec
        return safe_float(r.get('Decimal Odds'), None)

    with open(path, newline='', encoding='utf-8') as fh:
        reader = csv.DictReader(fh)
        for r in reader:
            # parse ratings and odds with safe fallbacks
            tr = safe_float(r.get('Team Rating'))
            orr = safe_float(r.get('Opponent Rating'))
            dec = parse_decimal_from_row(r)
            bank = safe_float(r.get('Bankroll'))
            kadj = safe_float(r.get('Kelly Adj.'), 0.5)
            if kadj is None:
                kadj = 0.5

            gr = GameRow(
                date = r.get('Date',''),
                team = r.get('Team',''),
                opponent = r.get('Opponent',''),
                league = r.get('League',''),
                sport = r.get('Sport',''),
                bet_type = r.get('Bet Type',''),
                sportsbook = r.get('Sportsbook',''),
                odds_offered = r.get('Odds Offered',''),
                team_rating = tr,
                opponent_rating = orr,
                decimal_odds = dec,
                bankroll = bank,
                kelly_adj = kadj
            )
            rows.append(gr)
    return rows