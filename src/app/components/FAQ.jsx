export default function FAQ() {
  return (
    <div className="wrap">
      <section className="s">
        <div className="faq">
          <div className="left">
            <div className="s-num" style={{ marginBottom: 24 }}>
              05 / Questions<b>Honest answers</b>
            </div>
            <h3>
              The questions <em>founders ask</em> before they sign up.
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--ink)",
                opacity: 0.78,
                maxWidth: 380,
              }}
            >
              Don&apos;t see yours? Email{" "}
              <span style={{ fontFamily: "var(--mono)" }}>hello@angelindex.co</span>{" "}
              — a human replies within 4 hours.
            </p>
          </div>
          <div className="right">
            <div className="item">
              <span className="n">Q.01</span>
              <div>
                <div className="q">Where does your data come from?</div>
                <div className="a">
                  A blend of public filings, accelerator partnerships, primary research,
                  and direct submission from investors. Every profile passes through a
                  two-analyst review before it ships.
                </div>
              </div>
              <span className="pl">+</span>
            </div>
            <div className="item">
              <span className="n">Q.02</span>
              <div>
                <div className="q">How fresh is the data?</div>
                <div className="a">
                  80% of profiles are touched within the past 6 months; the top 5,000 are
                  touched monthly. We publish a freshness score on every profile.
                </div>
              </div>
              <span className="pl">+</span>
            </div>
            <div className="item">
              <span className="n">Q.03</span>
              <div>
                <div className="q">Can investors opt out?</div>
                <div className="a">
                  Yes — and we make it easy. Investors can claim, edit, or remove their
                  profile in two clicks. We honor takedowns within 24 hours.
                </div>
              </div>
              <span className="pl">+</span>
            </div>
            <div className="item">
              <span className="n">Q.04</span>
              <div>
                <div className="q">Do you do warm intros?</div>
                <div className="a">
                  We map the path; we don&apos;t broker the intro. You see the shortest
                  warm path through your existing network and request it through your own
                  connection.
                </div>
              </div>
              <span className="pl">+</span>
            </div>
            <div className="item">
              <span className="n">Q.05</span>
              <div>
                <div className="q">What about non-African markets?</div>
                <div className="a">
                  Live in MENA, India, and Singapore. Karachi, Tunis, Jakarta, and Riyadh
                  ship Q3. LatAm is on the 2027 roadmap.
                </div>
              </div>
              <span className="pl">+</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
