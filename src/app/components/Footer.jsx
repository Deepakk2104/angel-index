export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="ftop">
          <div className="col brand-col">
            <div className="brand" style={{ color: "var(--ivory)" }}>
              Angel<span className="dot" />
              <span className="index">Index</span>
            </div>
            <p>
              The verified investor intelligence layer for founders and fund
              managers building in emerging markets.
            </p>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "rgba(244,239,230,.5)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: "24px",
              }}
            >
              Cape Town · Lagos · Bengaluru
            </p>
          </div>
          <div className="col">
            <h5>Product</h5>
            <ul>
              <li>Database</li>
              <li>Match scoring</li>
              <li>Signals</li>
              <li>Workspace</li>
              <li>API</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="col">
            <h5>Solutions</h5>
            <ul>
              <li>For founders</li>
              <li>For VCs</li>
              <li>For accelerators</li>
              <li>For DFIs</li>
              <li>For corporates</li>
            </ul>
          </div>
          <div className="col">
            <h5>Resources</h5>
            <ul>
              <li>Insights</li>
              <li>Africa Seed Index</li>
              <li>Customer stories</li>
              <li>Coverage report</li>
              <li>Glossary</li>
            </ul>
          </div>
          <div className="col">
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Careers · 12</li>
              <li>Press</li>
              <li>Security</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-mark">
          Angel<span className="d" />
          <em>Index</em>
        </div>

        <div className="fbottom">
          <div>© 2026 Angel Index PTY · All rights reserved</div>
          <div className="links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
            <span>Investor takedown</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
