html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0d1117;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(180deg, #111827 0%, #030712 100%);
}

.phone-frame {
  position: relative;
  width: min(100%, 430px);
  min-height: 930px;
  background: radial-gradient(circle at top, rgba(25, 35, 60, 0.95), rgba(5, 10, 18, 1) 30%);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  color: #e5efff;
}

.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 10px 18px 0;
  font-size: 12px;
  color: #dfe9ff;
}

.time {
  font-weight: 700;
  letter-spacing: 0.04em;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: #dde7ff;
}

.signal {
  opacity: 0.9;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
}

.battery {
  position: relative;
  padding-right: 14px;
}

.battery::after {
  content: "";
  position: absolute;
  right: 0;
  top: 2px;
  width: 10px;
  height: 6px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 2px;
  background: linear-gradient(90deg, #d8f5ff 0 50%, rgba(255, 255, 255, 0.2) 50% 100%);
}

.address-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 54px;
  margin: 0 12px 4px;
  padding: 8px 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(148, 163, 184, 0.12);
}

.address-left {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
}

.lock {
  color: #dceaff;
  opacity: 0.9;
  font-size: 18px;
}

.url {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(255, 255, 255, 0.8);
}

.badge-bot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fbd38d, #e74242);
  color: #fff;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  font-size: 17px;
}

.top-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px 6px;
}

.menu-left {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.brand-mark {
  width: 24px;
  height: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f4d28c, #dca335);
  color: #0d1117;
  font-size: 14px;
}

.brand-name {
  font-size: 14px;
  font-weight: 700;
  color: #f2f7ff;
}

.mode-pill {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  padding: 6px 12px;
  color: #dfeaff;
  font-size: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-bubble {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffebc4, #e9a726);
  color: #0f172a;
  font-weight: 700;
}

.balance {
  font-size: 12px;
  font-weight: 700;
  color: #e8eef5;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 8px 12px;
}

.tab-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 14px;
  margin-bottom: 8px;
}

.tab {
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  min-height: 48px;
  background: rgba(255, 255, 255, 0.06);
  color: #dfeafc;
  font-size: 12px;
  font-weight: 600;
}

.tab.active {
  background: linear-gradient(180deg, #f3be75 0%, #f1a44a 100%);
  color: #1b1203;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 8px 18px rgba(244, 164, 74, 0.28);
}

.tab.muted {
  opacity: 0.72;
}

.table-card {
  position: relative;
  margin: 0 10px;
  background: rgba(6, 11, 18, 0.7);
  border: 1px solid rgba(168, 180, 218, 0.12);
  border-radius: 22px 22px 18px 18px;
  overflow: hidden;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
}

.panel-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  box-shadow: 0 0 12px rgba(124, 58, 237, 0.5);
  font-size: 10px;
  font-weight: 700;
}

.panel-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 11px;
}

.mini-label {
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
}

.summary-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px 10px 0;
  gap: 10px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
}

.summary-label {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
}

.summary-label.active {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  color: #f1f5ff;
}

.columns-row {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1fr 0.9fr;
  gap: 8px;
  padding: 8px 12px 0;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(214, 229, 255, 0.7);
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}

.transaction-list {
  padding: 6px 0 0;
}

.transaction-row {
  display: grid;
  grid-template-columns: 0.7fr 1.5fr 1.5fr 0.8fr;
  align-items: center;
  gap: 8px;
  min-height: 42px;
  padding: 5px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
}

.pair-block {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
}

.pair-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: #7ab8ff;
  box-shadow: 0 0 12px rgba(122, 184, 255, 0.8);
}

.trend {
  font-size: 18px;
  line-height: 1;
}

.trend.up {
  color: #2ddbba;
}

.trend.down {
  color: #ff5a75;
}

.entry-col,
.exit-col {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.circle-fill,
.circle-empty {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}

.circle-fill {
  background: #ff6b6b;
  box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.2);
}

.circle-empty {
  background: transparent;
  border: 2px solid #ff6b6b;
  box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.08);
}

.price {
  font-size: 14px;
  color: #f1f8ff;
  font-weight: 600;
}

.price.muted {
  color: rgba(201, 216, 245, 0.7);
}

.pnl-col {
  text-align: right;
  font-size: 12px;
  color: #79f0cd;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 16px 12px 0;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 8px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.02);
}

.stat-label {
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(201, 220, 255, 0.6);
}

.stat-box strong {
  font-size: 14px;
  color: #f1f7ff;
}

.stat-box.positive strong {
  color: #67ffca;
}

.action-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 18px 12px 18px;
}

.run-button {
  border: none;
  border-radius: 14px;
  background: linear-gradient(180deg, #58d7fa 0%, #2cd2d8 100%);
  color: #06212f;
  min-width: 110px;
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 800;
  box-shadow: 0 10px 18px rgba(49, 217, 219, 0.25);
}

.play-icon {
  font-size: 12px;
}

.slow-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(231, 240, 255, 0.8);
  font-size: 11px;
  letter-spacing: 0.12em;
}

.switch-track {
  position: relative;
  width: 46px;
  height: 24px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.switch-thumb {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff, #dfeaf7);
  left: 3px;
  top: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.22);
}

.ai-analyzer {
  position: absolute;
  left: 18px;
  top: 318px;
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.95), rgba(92, 52, 182, 0.7) 20%, rgba(22, 17, 31, 0.65) 55%, rgba(7, 8, 14, 0.78) 100%);
  border: 2px solid rgba(154, 126, 255, 0.8);
  box-shadow: 0 0 20px rgba(129, 108, 255, 0.5), 0 0 40px rgba(75, 92, 255, 0.25);
}

.ai-core {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(148, 163, 184, 0.18));
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #e7e5ff;
  font-size: 18px;
  font-weight: 800;
}

.bottom-nav {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 10px;
  padding: 12px 18px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(8, 12, 18, 0.82);
}

.nav-item {
  height: 42px;
  border: none;
  border-radius: 12px;
  background: transparent;
  color: rgba(232, 239, 255, 0.65);
  font-size: 20px;
}

.nav-item.active {
  color: #f2f8ff;
}

.nav-item.search {
  font-size: 28px;
}

.badge-nav {
  position: relative;
  color: #fff;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

@media (max-width: 460px) {
  .page-shell {
    padding: 0;
  }

  .phone-frame {
    width: 100vw;
    min-height: 100vh;
    border-radius: 0;
  }
}
