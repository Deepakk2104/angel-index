export default function Trust() {
  return (
    <div className="wrap">
      <section className="trust">
        <div className="lbl">
          Trusted by founders & funds across 18 cities
        </div>

        <div className="logos-marquee">
          <div className="logos-track">

            {/* first set */}
            <div className="logo-stub">
              Norrsken
              <sup style={{ fontFamily: 'var(--mono)', fontSize: '11px' }}>
                22
              </sup>
            </div>

            <div className="logo-stub b">FUTURE/AFRICA</div>
            <div className="logo-stub m">KNIFE.CAPITAL</div>
            <div className="logo-stub">Partech</div>
            <div className="logo-stub b">LOFTYINC</div>
            <div className="logo-stub m">HAVAÍC ◇</div>

            {/* duplicate */}
            <div className="logo-stub">
              Norrsken
              <sup style={{ fontFamily: 'var(--mono)', fontSize: '11px' }}>
                22
              </sup>
            </div>

            <div className="logo-stub b">FUTURE/AFRICA</div>
            <div className="logo-stub m">KNIFE.CAPITAL</div>
            <div className="logo-stub">Partech</div>
            <div className="logo-stub b">LOFTYINC</div>
            <div className="logo-stub m">HAVAÍC ◇</div>

          </div>
        </div>
      </section>
    </div>
  );
}