export default function Features() {
  return (
    <div className="wrap">
      <section className="s">
        <div className="s-head">
          <div className="s-num">
            01 / Product<b>What you get</b>
          </div>
          <h2>
            A working <em>terminal</em> — not a spreadsheet, not a directory.
          </h2>
        </div>
        <div className="features">
          <div className="feat">
            <div className="num">
              <span>F.01</span>
              <span>Database</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <ellipse cx="14" cy="6" rx="9" ry="3" />
                <path d="M5 6v6c0 1.7 4 3 9 3s9-1.3 9-3V6" />
                <path d="M5 12v6c0 1.7 4 3 9 3s9-1.3 9-3v-6" />
                <path d="M5 18v4c0 1.7 4 3 9 3s9-1.3 9-3v-4" />
              </svg>
            </div>
            <h3>38,910 verified profiles.</h3>
            <p>
              Every investor profile is touched by a human analyst within the
              past 6 months. Active check sizes, current focus, real partner
              emails — not LinkedIn scrapes.
            </p>
          </div>
          <div className="feat">
            <div className="num">
              <span>F.02</span>
              <span>Matching</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="9" r="5" />
                <circle cx="19" cy="19" r="5" />
                <line x1="13" y1="13" x2="15" y2="15" />
              </svg>
            </div>
            <h3>Match scoring, transparent.</h3>
            <p>
              A 0–100 score for every founder/investor pair, broken down by
              stage, geography, sector thesis, check size, and recency of
              activity. We show our work — no black box.
            </p>
          </div>
          <div className="feat">
            <div className="num">
              <span>F.03</span>
              <span>Signals</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 21l6-12 5 8 4-6 7 10" />
                <circle cx="9" cy="9" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <h3>Real-time market signals.</h3>
            <p>
              New funds, partner moves, fresh dry powder, exits, hiring spikes.
              We surface what&apos;s about to deploy capital — before it&apos;s
              announced on Crunchbase.
            </p>
          </div>
          <div className="feat">
            <div className="num">
              <span>F.04</span>
              <span>Workspace</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="22" height="18" rx="1" />
                <path d="M3 11h22" />
                <path d="M9 5v18" />
              </svg>
            </div>
            <h3>Lists, pipelines, and CRM.</h3>
            <p>
              Drag investors into stages — Researching, Reached out, In
              conversation, Term sheet. Sync to Notion, Airtable, Affinity, or
              Slack.
            </p>
          </div>
          <div className="feat">
            <div className="num">
              <span>F.05</span>
              <span>Intros</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="7" cy="14" r="4" />
                <circle cx="21" cy="14" r="4" />
                <path d="M11 14h6" />
              </svg>
            </div>
            <h3>Warm-intro pathways.</h3>
            <p>
              See who in your network has worked with which partner — through
              LinkedIn, prior portcos, or accelerator cohorts. Request the intro
              in one click.
            </p>
          </div>
          <div className="feat">
            <div className="num">
              <span>F.06</span>
              <span>Index</span>
            </div>
            <div className="ic">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="14" width="4" height="11" />
                <rect x="10" y="9" width="4" height="16" />
                <rect x="17" y="4" width="4" height="21" />
                <path d="M22 4l3-3" />
              </svg>
            </div>
            <h3>The Africa Seed Index.™</h3>
            <p>
              A weekly composite measuring deal velocity, median check size, and
              dry powder across SSA. Subscribe to the print edition or pull the
              API.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
