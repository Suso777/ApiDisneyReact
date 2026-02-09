export default function CharacterCard({ character }) {
  return (
    <div style={{
      background: "white",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <img src={character.image} alt={character.name} width="150" />
      <h3>{character.name}</h3>
    </div>
  );
}