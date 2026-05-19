export default function Navbar() {
  return (
    <div className="wrap">
      <nav className="top">
        <div className="brand">
          Angel<span className="dot" />
          <span className="index">Index</span>
        </div>
        <ul>
          <li className="has-caret">Product</li>
          <li className="has-caret">Solutions</li>
          <li>Coverage</li>
          <li>Pricing</li>
          <li>Insights</li>
          <li>Customers</li>
        </ul>
        <div className="nav-actions">
          <a className="btn ghost" href="#">
            Sign in
          </a>
          <a className="btn ink" href="#">
            Request access <span className="arr">→</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
