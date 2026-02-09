import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/characters" style={{ marginRight: "1rem" }}>Characters</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
}