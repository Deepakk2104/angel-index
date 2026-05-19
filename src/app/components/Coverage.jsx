export default function Coverage() {
  return (
    <div className="wrap">
      <section className="s">
        <div className="s-head">
          <div className="s-num">
            03 / Coverage<b>Where we index</b>
          </div>
          <h2>
            Live in 18 cities. <em>Four more</em> by Q3.
          </h2>
        </div>
        <div className="coverage">
          <div className="left">
            <h3>
              Built where the <em>capital</em> actually flows.
            </h3>
            <p>
              We start with on-the-ground analysts in every market we cover. Profiles aren&apos;t
              scraped — they&apos;re collected, called, and corroborated. That&apos;s why our
              accuracy SLA holds at 95%.
            </p>
            <div className="cov-list">
              <div className="row">
                <span className="city">Lagos · Nigeria</span>
                <span className="n">8,210 inv.</span>
                <span className="pct">+11.4%</span>
              </div>
              <div className="row">
                <span className="city">Cape Town · South Africa</span>
                <span className="n">5,820 inv.</span>
                <span className="pct">+6.8%</span>
              </div>
              <div className="row">
                <span className="city">Nairobi · Kenya</span>
                <span className="n">4,940 inv.</span>
                <span className="pct">+8.2%</span>
              </div>
              <div className="row">
                <span className="city">Cairo · Egypt</span>
                <span className="n">3,710 inv.</span>
                <span className="pct">+9.1%</span>
              </div>
              <div className="row">
                <span className="city">Singapore · SG</span>
                <span className="n">3,490 inv.</span>
                <span className="pct">+4.0%</span>
              </div>
              <div className="row">
                <span className="city">Bengaluru · India</span>
                <span className="n">3,120 inv.</span>
                <span className="pct">+5.7%</span>
              </div>
              <div className="row">
                <span className="city">Accra · Ghana</span>
                <span className="n">1,860 inv.</span>
                <span className="pct">+12.0%</span>
              </div>
            </div>
          </div>
          <div className="map-card">
            <div className="mhead">Coverage map · live</div>
            <div className="mttl">38,910 verified profiles across 18 cities</div>
            <svg className="map-svg" viewBox="0 0 480 460" xmlns="http://www.w3.org/2000/svg">
              {/* Stylized continents (abstract, not to scale) */}
              {/* Africa */}
              <path
                className="land hot"
                d="M210 100 L260 92 L300 110 L322 142 L330 188 L322 234 L300 280 L268 320 L240 360 L218 380 L196 360 L184 320 L176 270 L180 220 L188 168 L200 130 Z"
              />
              {/* Middle East */}
              <path
                className="land"
                d="M310 110 L360 100 L388 130 L382 168 L350 178 L320 158 Z"
              />
              {/* South Asia */}
              <path
                className="land hot"
                d="M380 160 L430 152 L450 180 L444 220 L420 246 L390 240 L376 210 Z"
              />
              {/* SE Asia */}
              <path className="land" d="M438 226 L470 222 L468 256 L444 268 Z" />
              {/* Pins (cities) */}
              <g>
                <circle className="pin-ring" cx="232" cy="160" r="10" />
                <circle className="pin" cx="232" cy="160" r="3.5" />
                <text
                  x="244"
                  y="163"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  LAGOS
                </text>
                <circle className="pin-ring" cx="252" cy="332" r="10" />
                <circle className="pin" cx="252" cy="332" r="3.5" />
                <text
                  x="264"
                  y="335"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  CAPE TOWN
                </text>
                <circle className="pin-ring" cx="296" cy="232" r="10" />
                <circle className="pin" cx="296" cy="232" r="3.5" />
                <text
                  x="308"
                  y="235"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  NAIROBI
                </text>
                <circle className="pin-ring" cx="298" cy="130" r="10" />
                <circle className="pin" cx="298" cy="130" r="3.5" />
                <text
                  x="310"
                  y="133"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  CAIRO
                </text>
                <circle className="pin-ring" cx="218" cy="190" r="10" />
                <circle className="pin" cx="218" cy="190" r="3.5" />
                <text
                  x="148"
                  y="193"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  ACCRA
                </text>
                <circle className="pin-ring" cx="408" cy="208" r="10" />
                <circle className="pin" cx="408" cy="208" r="3.5" />
                <text
                  x="420"
                  y="211"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  BENGALURU
                </text>
                <circle className="pin-ring" cx="456" cy="248" r="10" />
                <circle className="pin" cx="456" cy="248" r="3.5" />
                <text
                  x="386"
                  y="270"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  SINGAPORE
                </text>
                <circle className="pin-ring" cx="350" cy="148" r="10" />
                <circle className="pin" cx="350" cy="148" r="3.5" />
                <text
                  x="362"
                  y="151"
                  fill="#F4EFE6"
                  fontFamily="JetBrains Mono"
                  fontSize="9"
                  letterSpacing=".06em"
                >
                  DUBAI
                </text>
              </g>
            </svg>
            <div className="legend">
              <span>Live coverage · 18 cities</span>
              <span>
                <b>+ 4</b> Q3 2026 → Tunis · Karachi · Jakarta · Riyadh
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
