import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🧭 CampusNav AI
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Map</li>
        <li>Navigation</li>
        <li>AI Assistant</li>
        <li>Alerts</li>
      </ul>

      <button className="login-btn">
        Login
      </button>
    </nav>
  );
}

export default Navbar;