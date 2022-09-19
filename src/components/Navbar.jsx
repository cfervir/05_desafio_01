import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="container container--flex container--nav">
        <div className="container--links">
          <Link className="links" to="/">
            🏠 <span className="links--decor">Home</span>
          </Link>
          <Link className="links" to="/contact">
            📙 <span className="links--decor">Contact</span>
          </Link>
        </div>
        <div className="brand">
          <p>Happy Cake 🍰</p>
        </div>
      </nav>
    </header>
  )
}