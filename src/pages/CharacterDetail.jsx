import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function CharacterDetail() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`http://localhost:3000/characters/${id}`);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} width="200" />
      <p>Edad: {data.age}</p>
      <p>Peso: {data.weight}</p>
      <p>Historia: {data.history}</p>
    </div>
  );
}