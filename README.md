# Vibe-Fanalyze 🎧📊

A Multi-Sport Analytics Platform + Betting & Fantasy AI Assistant
Built with FastAPI, MySQL, MongoDB, React, and machine-learning driven prediction models.
Vibe-Fanalyze brings together sports analytics, fantasy insights, and sports-betting math (Kelly Criterion) into one unified platform for:
✔️ Bettors
✔️ Fantasy players
✔️ Analysts
✔️ Coaches
✔️ Stat nerds
✔️ Fans who just love data

## 🏆 Supported Leagues

League Status
🏈 NFL ✅ Active
🏀 NBA ✅ Active
⚾ MLB 🔧 In Progress
🏀 WNBA 🔧 In Progress
🏒 NHL 🔧 In Progress
🥋 UFC 🔧 In Progress
⚽ MLS 🔧 In Progress

## ✨ Key Features

🔍 Searchable player, team, and game stats
📊 Model-driven prediction engine
💸 Kelly Criterion stake sizing
🧠 AI-powered chat assistant (/chat)
🗓️ Schedule queries & match insights
📈 Game detail breakdowns with suggested picks
📂 FastAPI modular endpoints by sport
💬 Frontend UI with bet slip, dashboards & analytics
🔥 Designed for real-time sportsbook integrations (future)

## ⚙️ Tech Stack

- **Modeling:** Custom predictions + Kelly Criterion Engine
- **ORM / ODM:** SQLAlchemy + Pydantic
- **DevOps Docker:** (in progress)
- **Data Ingest:** APIs like TheSportsDB, The Odds API (planned)
- **Backend:** FastAPI (Python)
- **Frontend:** React + TypeScript
- **Database:** MySQL (structured) + MongoDB (flexible data)
- **Data Sources (planned):** TheSportsDB, The Odds API, etc.
- **Version Control:** Git + GitHub
- **Migrations:** Alembic (MySQL)

## 🚀 Getting Started

1. Clone the repo  
`git clone https://github.com/yourusername/vibe-fanalyze.git`
`cd vibe-fanalyze`

2. Set up virtual environment  
   `python -m venv .venv`
   `python -m venv venv && source venv/bin/activate` (Linux/Mac)  
   `venv\Scripts\activate` (Windows)

3. Install requirements  
   `pip install -r requirements.txt`

4. Rename `.env.template` to `.env` and fill in your API keys

5. Run the server  
   `python backend/app.py` or `uvicorn backend.app:app --reload`

## 📂 Project Structure

Vibe-Fanalyze/

- `.vscode/`                 # IDE configurations
  - `launch.json`
- `app/`                   # Core application
  - `vibebot.py`
  - `main.py`              # Entry point (runs app)
  - `config/`              # App settings/config
    - `base.py`
    - `dev.py`
    - `prod.py`
    - `settings.py`        # Environment/configuration management
  - `core/`                   # core app setup
    - `app_factory.py`      # create_app() for testing/flexibility
    - `logging.py`          # central logging config
    - `exceptions.py`       # custom error handling
    - `settings.py`        # Environment/configuration management
  - `db/`                  # DB connectors (MySQL/Mongo)
    - `mysql_connector.py`
    - `mongodb_connector.py`
  - `models/`              # DB models (SQLAlchemy or ODM)
    - `chat_model.py`      ← 🆕 Pydantic model for MongoDB
    - `analytics_model.py` ← 🆕 SQLAlchemy model for predictions
    - `mlb`
    - `mls`
    - `nba`
      - `player.py`
      - `team.py`
      - `betting.py`
      - `fantasy.py`
      - `stats.py`
      - `game.py`
    - `nfl`
      - `player.py`
      - `team.py`
      - `betting.py`
      - `fantasy.py`
      - `stats.py`
      - `game.py`
    - `nhl`
    - `wnba`
  - `repositories/`           # data access layer
    - `player_repo.py`
    - `team_repo.py`
    - `stats_repo.py`
    - `fantasy_repo.py`
  - `routes/`              # API endpoints - FastAPI route handlers
    - `v1`                  # versioned
      - `mlb`
        - `betting.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `stats.py`
        - `teams.py`
      - `mls`
        - `betting.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `stats.py`
        - `teams.py`
      - `nba`
        - `betting.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `stats.py`
        - `teams.py`
      - `nfl`
        - `stats.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `teams.py`
      - `nhl`
        - `betting.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `stats.py`
        - `teams.py`
      - `wnba`
        - `betting.py`
        - `fantasy.py`
        - `games.py`
        - `players.py`
        - `stats.py`
        - `teams.py`
      - `kelly_routes.py`
      - `chat_routes.py` ← 🆕 New FastAPI route
    - `health.py`           # simple health check endpoint
  - `static`
    - `charts.js`
`vibebot.py`
`templates`
`chat.html`
  - `services/`            # Business logic
    - `player_service.py`
    - `team_service.py`
    - `stats_service.py`
    - `betting_service.py`
    - `game_service.py`
    - `fantasy_service.py`
    - `kelly_service.py`
    - `prediction_service.py`
    - `kelly_service.py`
    - `prediction_service.py`
    - `db_mongo.py`        ← 🆕 MongoDB connector
    - `db_mysql.py`        ← 🆕 MySQL connector
    - `utils/`               # Helper functions (optional)
    - `formatter.py`
    - `helper.py`
  - `static`
    - `charts.js` ← 🆕 Chart rendering logic and 🆕 JavaScript for frontend refresh
  - `template`
    - `chat.html` ← 🆕 Updated with chart visualizations
  - `ui`
  - `utils`
- `data/`                    # Raw/static data
  - `fixtures/`               # static test/seed data
  - `mongodb/`
    - `sample_data.json`
    - `schema_notes.md`
  - `mysql/`
    - `init.sql`
    - `vibe_fanalyze.sql`
- `frontend`
  - `src`
    - `pages`
      - `VibeFanalyzeDashboard.jsx`
- `migrations`                # Alembic for MySQL schema migrations
  - `README.md`
- `modules`
  - `kelly_predictor`
    - `data`
      - `example_bet_data.csv`
    - `notebooks`
      - `KellyCriterion_Predictions.ipynb`
    - `src`
      - `__init__.py`
      - `kelly_calculator.py`
      - `main.py`
      - `models.py`
      - `utils.py`
    - `predictor.py`
- `scripts/`                 # Seeders & CLI tools
  - `mysql_seed.py`
  - `mongodb_seed.py`
- `tests/`                   # Unit/integration tests
  - `conftest.py`
  - `test_health.py`
  - `test_players.py`
  - `test_teams.py`
- `schemas/`             # Pydantic schemas
  - `nba`
  - `nfl`
  - `mls`
  - `mlb`
  - `nhl`
  - `wnba`
  - `shared`
- `env`                     # Local environment config
- `Dockerfile`               # Container setup
- `requirements.txt`         # Python dependencies
- `README.md`
- `.dockerignore`
- `games.stat.json`
- `LICENSE`
- `.gitignore`

## 📜 License

MIT — Free to use, modify, and extend.
If you build something cool, tag it: #VibeFanalyze

## 🤝 Contributing

PRs welcome.
If you'd like to contribute:
Fork
Create a feature branch
Submit a pull request

## 🧮 Kelly Criterion Sports Betting Predictor

This project combines **sports betting analytics** with the **Kelly Criterion** and a **prediction model** to identify value bets, calculate bet sizing, and simulate profitability over time.

It’s designed for **NFL**, but you can easily adapt it to other sports.

## Quick start

1. Create a Python environment (Python 3.8+ recommended)
2. Install dependencies: `pip install -r requirements.txt`
3. Run the example: `python src/main.py`

The `data/example_bet_data.csv` file contains a sample matchup used by `src/main.py`.

## 🚀 Running the Backend

git clone <https://github.com/yourusername/vibe-fanalyze.git>
cd vibe-fanalyze
python -m venv .venv
source .venv/bin/activate  # mac/linux
venv\Scripts\activate      # windows

pip install -r requirements.txt
uvicorn app.main:app --reload

Backend will run at:

➡️ <http://localhost:8000>
➡️ Docs: <http://localhost:8000/docs>

## ⚙️ Core Formula

1. Create a Python environment (Python 3.8+ recommended)
2. Install dependencies: `pip install -r requirements.txt`
3. Run the example: `python src/main.py`
The `data/example_bet_data.csv` file contains a sample matchup used by `src/main.py`.

## 🖥️ Running the Frontend

cd frontend
npm install
npm run dev

Frontend runs on:
➡️ <http://localhost:5173/> (Vite default)

## 🧪 Testing

pytest -q

## 🧠 Prediction & Betting Engine

This project includes a Kelly Criterion predictor module used for optimal stake sizing based on expected value:

Formula: Kelly % = ((P * (B + 1)) - 1) / B

Where:
P = model-estimated win probability
B = decimal odds minus 1

This powers:
💰 Bet sizing recommendations
📈 Bankroll simulation
🧮 Expected value (EV) calculations

## 🔮 Predictions

The prediction module estimates **win probabilities** using:

- Simple rating systems (FPI, Elo, or Power Index)
- Historical team stats (OFF, DEF)
- Home-field advantage
- Bookmaker odds → implied win %

It outputs:

- **Predicted Win Probability**
- **Expected Value**
- **Recommended Bet Size**

## 🗺️ Roadmap

Feature Status
Base Stats API ✅
API Versioning ✅
Chatbot Assistant 🟡
Kelly Betting Engine 🟡
Full React UI 🟡
Authentication / Profiles 🔜
Live Odds Integrations 🔜
Real-time bets + bankroll tracker 🔜
Mobile App (React Native) 🔜

## 📊 Example Run

```bash
python src/main.py
