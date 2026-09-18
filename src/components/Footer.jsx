export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#" onClick={(e) => e.preventDefault()}>
          Privacy statement
        </a>
        <span className="footer-sep">|</span>
        <a href="#" onClick={(e) => e.preventDefault()}>
          Cookie Policy
        </a>
        <span className="footer-sep">|</span>
        <a href="#" onClick={(e) => e.preventDefault()}>
          About Us
        </a>
      </div>
      <p className="footer-copy">
        Copyright © 2026 All rights reserved{' '}
        <a href="#" onClick={(e) => e.preventDefault()}>
          AI Wellora
        </a>
      </p>
    </footer>
  )
}
