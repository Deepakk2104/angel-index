export default function CTA() {
  return (
    <section className="cta-band">
      <div className="ticker-line">
        <span>Angel Index · Cape Town / Lagos / Bengaluru</span>
        <span className="live">
          <span
            className="d"
            style={{
              background: "var(--amber)",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          {" "}
          38,910 profiles · live
        </span>
      </div>
      <div className="inner">
        <h2>
          Skip the warm intro.
          <br />
          <em>Find</em> the right <span className="a">cheque.</span>
        </h2>
        <div className="right">
          <div>
            14 days free. No card. 50 free profile views. If you don&apos;t have
            a list of 60 high-fit investors by day 7, we&apos;ll refund whatever
            you do pay — and email you the list anyway.
          </div>
          <div className="btns">
            <a className="btn amber" href="#">
              Start free <span className="arr">→</span>
            </a>
            <a
              className="btn ghost"
              href="#"
              style={{
                border: "1px solid rgba(244,239,230,.4)",
                color: "var(--ivory)",
              }}
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
