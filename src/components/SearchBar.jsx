function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar personaje..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;
