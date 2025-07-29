function FilterByHouse({ house, onChange }) {
  return (
    <form className="filter_form" onSubmit={(ev) => ev.preventDefault()}>
      <label htmlFor="house">Filtrar por casa </label>
      <select
        className="filter_input"
        id="house"
        value={house}
        onChange={onChange}
      >
        <option value="">Todas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </form>
  );
}

export default FilterByHouse;
