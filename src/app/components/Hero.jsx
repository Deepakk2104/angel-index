export default function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">
        <span className="pill">
          <span className="dot" /> Series A · led by Norrsken22 · May 2026
        </span>
        <span className="mono muted">v 4.2 · Coverage now in 18 cities</span>
      </div>
      <h1>
        The investor index
        <br />
        for <em>emerging</em> markets.
        <br />
        <span className="accent">Capital</span>, <em>indexed</em>.
      </h1>
      <p className="sub">
        Angel Index is the verified investor intelligence layer for founders and fund managers
        building in Africa, MENA, and South &amp; Southeast Asia. 38,910 profiles. Real-time deal
        flow. No more cold cheques.
      </p>
      <div className="cta">
        <a className="btn amber" href="#">
          Start free for 14 days <span className="arr">→</span>
        </a>
        <a className="btn ghost" href="#" style={{ border: '1px solid var(--ink)' }}>
          Book a coverage demo
        </a>
        <span className="note">No card · 50 free profile views</span>
      </div>

      {/* meta strip */}
      <div className="hero-meta">
        <div className="cell">
          <div className="k">Verified profiles</div>
          <div className="v">
            38,910 <small>↑ 1.8%</small>
          </div>
          <div className="note">Updated weekly · 95% accuracy SLA</div>
        </div>
        <div className="cell">
          <div className="k">Active investors L30D</div>
          <div className="v">
            12,408 <small>↑ 4.2%</small>
          </div>
          <div className="note">Touched a deal in last 30 days</div>
        </div>
        <div className="cell">
          <div className="k">Cities covered</div>
          <div className="v">
            18 <small>+ 4 Q3</small>
          </div>
          <div className="note">Sub-Saharan Africa, MENA, S/SE Asia</div>
        </div>
        <div className="cell">
          <div className="k">Avg. response time</div>
          <div className="v">
            3.4d <small>↓ 38%</small>
          </div>
          <div className="note">Founder → first investor reply</div>
        </div>
      </div>

      {/* TERMINAL MOCK */}
      <div className="terminal">
        <div className="term-bar">
          <div className="lights">
            <span />
            <span />
            <span />
          </div>
          <div className="url">
            app.angelindex.co<b>/investors/sub-saharan-africa</b>
          </div>
          <div className="right">
            <span className="live">
              <span className="d" /> LIVE
            </span>
            <span>⌘ K</span>
          </div>
        </div>
        <div className="term-shell">
          {/* left nav */}
          <div className="term-side">
            <div className="grp">Workspace</div>
            <a className="active" href="#">
              Investors <span className="c">38.9K</span>
            </a>
            <a href="#">
              Deals <span className="c">2,104</span>
            </a>
            <a href="#">
              Funds <span className="c">812</span>
            </a>
            <a href="#">
              Signals <span className="c">14</span>
            </a>
            <div className="grp">Lists</div>
            <a href="#">
              Series A · Climate <span className="c">42</span>
            </a>
            <a href="#">
              Lagos warm leads <span className="c">17</span>
            </a>
            <a href="#">
              Family offices <span className="c">208</span>
            </a>
            <div className="grp">Saved searches</div>
            <a href="#">
              Fintech · SSA <span className="c">·</span>
            </a>
            <a href="#">
              Healthtech · MENA <span className="c">·</span>
            </a>
          </div>

          {/* main table */}
          <div className="term-main">
            <div className="term-head">
              <div>
                <h3>Investors · Sub-Saharan Africa · Series A</h3>
                <div className="sub">
                  412 results · sorted by check-size match · updated 09:12 SAST
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="chip">Sort: Match ↓</span>
                <span className="chip">Export</span>
              </div>
            </div>
            <div className="term-filters">
              <span className="chip on">
                Stage: Series A <span className="x">×</span>
              </span>
              <span className="chip on">
                Geo: SSA <span className="x">×</span>
              </span>
              <span className="chip on">
                Sector: Fintech <span className="x">×</span>
              </span>
              <span className="chip">+ Check size</span>
              <span className="chip">+ Lead status</span>
              <span className="chip">+ Last active</span>
            </div>
            <div className="term-table-wrap">
            <table className="invs">
              <thead>
                <tr>
                  <th>Investor</th>
                  <th>Stage</th>
                  <th>Geography</th>
                  <th>Last check</th>
                  <th>Δ 90d</th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="avatar t">N</span>
                    <span className="name">Norrsken22</span>
                  </td>
                  <td>Seed–A</td>
                  <td className="geo">Pan-Africa</td>
                  <td className="check">USD 2.4M</td>
                  <td className="pos">+18%</td>
                  <td>
                    <span className="badge match">94 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar a">F</span>
                    <span className="name">Future Africa</span>
                  </td>
                  <td>Pre–Seed</td>
                  <td className="geo">Lagos</td>
                  <td className="check">USD 0.5M</td>
                  <td className="pos">+11%</td>
                  <td>
                    <span className="badge match">89 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar i">K</span>
                    <span className="name">Knife Capital</span>
                  </td>
                  <td>Series A</td>
                  <td className="geo">Cape Town</td>
                  <td className="check">USD 4.1M</td>
                  <td className="pos">+6%</td>
                  <td>
                    <span className="badge match">88 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar t">V</span>
                    <span className="name">Ventures Platform</span>
                  </td>
                  <td>Seed</td>
                  <td className="geo">Abuja</td>
                  <td className="check">USD 1.2M</td>
                  <td className="pos">+22%</td>
                  <td>
                    <span className="badge">81 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar a">P</span>
                    <span className="name">Partech Africa</span>
                  </td>
                  <td>A–B</td>
                  <td className="geo">Dakar / Nairobi</td>
                  <td className="check">USD 5.8M</td>
                  <td className="pos">+9%</td>
                  <td>
                    <span className="badge">79 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar i">L</span>
                    <span className="name">LoftyInc</span>
                  </td>
                  <td>Pre–Seed</td>
                  <td className="geo">Lagos</td>
                  <td className="check">USD 0.3M</td>
                  <td className="neg">−2%</td>
                  <td>
                    <span className="badge">74 / 100</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="avatar t">H</span>
                    <span className="name">HAVAÍC</span>
                  </td>
                  <td>Pre–A</td>
                  <td className="geo">Cape Town</td>
                  <td className="check">USD 0.9M</td>
                  <td className="pos">+4%</td>
                  <td>
                    <span className="badge">71 / 100</span>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          {/* right pulse */}
          <div className="term-right">
            <div className="ttl">Index pulse · L30D</div>
            <div className="stat-row">
              <span className="k">Active investors</span>
              <span className="v">
                12,408 <small>↑ 4.2%</small>
              </span>
            </div>
            <div className="stat-row">
              <span className="k">New rounds</span>
              <span className="v">
                204 <small>↑ 8.0%</small>
              </span>
            </div>
            <div className="stat-row">
              <span className="k">Median check</span>
              <span className="v">$420K</span>
            </div>
            <div className="stat-row">
              <span className="k">Dry powder</span>
              <span className="v">$1.8B</span>
            </div>

            <div className="pulse">
              <div className="lab">Africa Seed Index</div>
              <div className="v">+4.2%</div>
              <svg viewBox="0 0 300 90" preserveAspectRatio="none">
                <line x1="0" y1="22" x2="300" y2="22" className="grid-line" />
                <line x1="0" y1="50" x2="300" y2="50" className="grid-line" />
                <line x1="0" y1="78" x2="300" y2="78" className="grid-line" />
                <path
                  className="spark-fill"
                  d="M0,72 L20,66 L40,68 L60,55 L80,58 L100,46 L120,50 L140,38 L160,42 L180,30 L200,34 L220,22 L240,28 L260,18 L280,24 L300,12 L300,90 L0,90 Z"
                />
                <path
                  className="spark-stroke"
                  d="M0,72 L20,66 L40,68 L60,55 L80,58 L100,46 L120,50 L140,38 L160,42 L180,30 L200,34 L220,22 L240,28 L260,18 L280,24 L300,12"
                />
              </svg>
            </div>

            <div className="alerts">
              <div className="ttl" style={{ marginTop: '18px' }}>
                Signals
              </div>
              <div className="alert">
                <span className="d" />
                <span className="txt">
                  <b>Norrsken22</b> opened a new fund · USD 205M target
                </span>
                <span className="t">2h</span>
              </div>
              <div className="alert">
                <span className="d" />
                <span className="txt">
                  <b>4 partners</b> joined Future Africa from Y Combinator
                </span>
                <span className="t">5h</span>
              </div>
              <div className="alert">
                <span className="d" />
                <span className="txt">
                  <b>Knife Capital</b> hired a Lagos GP
                </span>
                <span className="t">1d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
