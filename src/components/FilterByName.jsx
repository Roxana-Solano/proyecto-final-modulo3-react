function FilterByName({ searchName, onChange }) {
  return (
    <div>
      <form
        className="filter_form"
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <label htmlFor="searName">Buscar por nombre</label>
        <input
          id="searName"
          className="filter_input"
          type="text"
          value={searchName}
          onChange={onChange}
          placeholder="Ej: Harry "
        />
      </form>
    </div>
  );
}

export default FilterByName;
