export default function Pricing() {
  return (
    <div className="wrap">
      <section className="s">
        <div className="s-head">
          <div className="s-num">
            04 / Pricing<b>Plans</b>
          </div>
          <h2>
            Priced like a tool. <em>Not like</em> a database.
          </h2>
        </div>
        <div className="price-grid">
          <div className="price">
            <div className="tag">FOUNDER</div>
            <h3>Solo</h3>
            <p className="desc">For founders running their first or second institutional round.</p>
            <div className="num">
              $49<small>/ mo</small>
            </div>
            <ul>
              <li>Full investor database access</li>
              <li>50 profile views per day</li>
              <li>Match scoring + 5 saved searches</li>
              <li>Pipeline workspace · 1 seat</li>
              <li>Email signals · weekly digest</li>
            </ul>
            <div className="cta">
              <a className="btn outline" href="#">
                Start free trial <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="price feature">
            <div className="tag">★ Most teams</div>
            <h3>Founder Team</h3>
            <p className="desc">For seed and Series A teams running an active raise.</p>
            <div className="num">
              $249<small>/ mo</small>
            </div>
            <ul>
              <li>Everything in Solo</li>
              <li>Unlimited profile views & exports</li>
              <li>Up to 5 seats · shared pipeline</li>
              <li>Warm-intro pathway graph</li>
              <li>Real-time signals (Slack + email)</li>
              <li>Notion / Airtable / Affinity sync</li>
            </ul>
            <div className="cta">
              <a className="btn amber" href="#">
                Start free trial <span className="arr">→</span>
              </a>
            </div>
          </div>

          <div className="price">
            <div className="tag">FUND · ENTERPRISE</div>
            <h3>Coverage</h3>
            <p className="desc">For VC funds, family offices, and accelerator programs.</p>
            <div className="num">
              <em>Custom</em>
            </div>
            <ul>
              <li>Everything in Founder Team</li>
              <li>Unlimited seats · SSO & SCIM</li>
              <li>API access · 50K calls/mo</li>
              <li>White-label data feeds</li>
              <li>Dedicated coverage analyst</li>
              <li>Quarterly market briefings</li>
            </ul>
            <div className="cta">
              <a className="btn outline" href="#">
                Talk to sales <span className="arr">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
