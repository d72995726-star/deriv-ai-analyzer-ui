"use client";

const rows = [
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
  { entry: 621.68, exit: 621.68, pnl: 1.4, direction: "up" },
  { entry: 621.68, exit: 621.68, pnl: 0.47, direction: "down" },
];

function TrendIcon({ direction }: { direction: "up" | "down" }) {
  return (
    <span className={`trend ${direction}`} aria-hidden="true">
      {direction === "up" ? "↗" : "↘"}
    </span>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="phone-frame">
        <div className="status-bar">
          <span className="time">11:27</span>
          <div className="status-icons">
            <span className="signal">2.29 KB/s</span>
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="battery">50%</span>
          </div>
        </div>

        <div className="address-row">
          <div className="address-left">
            <span className="lock">◌</span>
            <span className="url">hefltrades.site/app#bot_builder</span>
          </div>
          <div className="badge-bot">§</div>
        </div>

        <header className="top-bar">
          <div className="menu-left">≡</div>
          <div className="brand-block">
            <div className="brand-mark">✦</div>
            <div className="brand-name">Hefler Trades</div>
          </div>
          <div className="mode-pill">Normal</div>
          <div className="profile-bubble">R</div>
          <div className="balance">179.39 USD</div>
        </header>

        <nav className="tab-row">
          <button className="tab muted">Dashboard</button>
          <button className="tab active">Bot Builder</button>
          <button className="tab muted">Wide Eye</button>
          <button className="tab muted">Analysis To</button>
        </nav>

        <section className="table-card">
          <div className="panel-head">
            <div className="panel-tag">AI</div>
            <div className="panel-actions">
              <span className="mini-label">Reset</span>
            </div>
          </div>

          <div className="summary-row">
            <span className="summary-label">Summary</span>
            <span className="summary-label active">Transactions</span>
            <span className="summary-label">Journal</span>
          </div>

          <div className="columns-row">
            <span>USD</span>
            <span>KSH</span>
            <span className="center">Type</span>
            <span className="right">P/L</span>
          </div>

          <div className="transaction-list">
            {rows.map((row, index) => (
              <div className="transaction-row" key={index}>
                <div className="pair-block">
                  <span className="pair-dot" />
                  <TrendIcon direction={row.direction} />
                </div>

                <div className="entry-col">
                  <span className="circle-fill" />
                  <span className="price">{row.entry.toFixed(2)}</span>
                </div>

                <div className="exit-col">
                  <span className="circle-empty" />
                  <span className="price muted">{row.exit.toFixed(2)}</span>
                </div>

                <div className="pnl-col">{row.pnl.toFixed(2)} USD</div>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-label">Stake</span>
              <strong>240.00 USD</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Payout</span>
              <strong>365.00 USD</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Runs</span>
              <strong>150</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Lost</span>
              <strong>0</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Won</span>
              <strong>150</strong>
            </div>
            <div className="stat-box positive">
              <span className="stat-label">P/L</span>
              <strong>+125.00 USD</strong>
            </div>
          </div>

          <div className="action-bar">
            <button className="run-button">
              <span className="play-icon">▶</span>
              Run
            </button>
            <div className="slow-toggle">
              <span className="slow-label">SLOW</span>
              <span className="switch-track">
                <span className="switch-thumb" />
              </span>
            </div>
          </div>
        </section>

        <div className="ai-analyzer">
          <div className="ai-core">AI</div>
        </div>

        <div className="bottom-nav">
          <button className="nav-item active">⌂</button>
          <button className="nav-item">▣</button>
          <button className="nav-item search">◌</button>
          <button className="nav-item badge-nav">5</button>
          <button className="nav-item">⋮</button>
        </div>
      </div>
    </main>
  );
}
