const Person = (person) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

const Persons = ({persons, searchName}) => {
  const filterByName = (person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  };

  return (
    <>
      {persons.filter(filterByName).map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </>
  );
};

export default Persons;
