import useFetch from "../hooks/useFetch";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

export default function Characters() {
  const { data, loading, error } = useFetch("http://localhost:3000/characters");

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Characters</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem"
      }}>
        {data.map(character => (
          <Link key={character.id} to={`/characters/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
}