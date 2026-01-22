function List() {
  let items = ["Leche", "Huevos", "Carne", "Pan", "Mantequilla", "Queso"];
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
