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
              <li><a href="#">Database</a></li>
              <li><a href="#">Match scoring</a></li>
              <li><a href="#">Signals</a></li>
              <li><a href="#">Workspace</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Solutions</h5>
            <ul>
              <li><a href="#">For founders</a></li>
              <li><a href="#">For VCs</a></li>
              <li><a href="#">For accelerators</a></li>
              <li><a href="#">For DFIs</a></li>
              <li><a href="#">For corporates</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Insights</a></li>
              <li><a href="#">Africa Seed Index</a></li>
              <li><a href="#">Customer stories</a></li>
              <li><a href="#">Coverage report</a></li>
              <li><a href="#">Glossary</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers · 12</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Contact</a></li>
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
