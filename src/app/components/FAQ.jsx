'use client';

import { useState } from 'react';

const ITEMS = [
  {
    n: 'Q.01',
    q: 'Where does your data come from?',
    a: 'A blend of public filings, accelerator partnerships, primary research, and direct submission from investors. Every profile passes through a two-analyst review before it ships.',
  },
  {
    n: 'Q.02',
    q: 'How fresh is the data?',
    a: '80% of profiles are touched within the past 6 months; the top 5,000 are touched monthly. We publish a freshness score on every profile.',
  },
  {
    n: 'Q.03',
    q: 'Can investors opt out?',
    a: 'Yes — and we make it easy. Investors can claim, edit, or remove their profile in two clicks. We honor takedowns within 24 hours.',
  },
  {
    n: 'Q.04',
    q: 'Do you do warm intros?',
    a: "We map the path; we don't broker the intro. You see the shortest warm path through your existing network and request it through your own connection.",
  },
  {
    n: 'Q.05',
    q: 'What about non-African markets?',
    a: 'Live in MENA, India, and Singapore. Karachi, Tunis, Jakarta, and Riyadh ship Q3. LatAm is on the 2027 roadmap.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
                color: 'var(--ink)',
                opacity: 0.78,
                maxWidth: 380,
              }}
            >
              Don&apos;t see yours? Email{' '}
              <span style={{ fontFamily: 'var(--mono)' }}>hello@angelindex.co</span> — a human
              replies within 4 hours.
            </p>
          </div>
          <div className="right">
            {ITEMS.map((item, i) => (
              <div
                key={item.n}
                className={`item${openIndex === i ? ' is-open' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(openIndex === i ? null : i);
                  }
                }}
              >
                <span className="n">{item.n}</span>
                <div>
                  <div className="q">{item.q}</div>
                  <div className="a">{item.a}</div>
                </div>
                <span className="pl">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
