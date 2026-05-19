'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 992) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`top${open ? ' is-open' : ''}`}>
      <div className="nav-bar">
        <a className="brand" href="#" onClick={() => setOpen(false)}>
          Angel<span className="dot" />
          <span className="index">Index</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div id="nav-menu" className="nav-menu">
        <ul>
          <li className="has-caret">
            <a href="#" onClick={() => setOpen(false)}>
              Product
            </a>
          </li>
          <li className="has-caret">
            <a href="#" onClick={() => setOpen(false)}>
              Solutions
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Coverage
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Insights
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setOpen(false)}>
              Customers
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <a className="btn ghost" href="#" onClick={() => setOpen(false)}>
            Sign in
          </a>
          <a className="btn ink" href="#" onClick={() => setOpen(false)}>
            Request access <span className="arr">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
