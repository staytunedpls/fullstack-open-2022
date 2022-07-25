import personService from "../services/persons";

const Person = ({ person, persons, setPersons }) => {
  const handleDelete = (personToDelete) => {
    console.log("Initiating deleting", personToDelete)
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .deletePerson(personToDelete.id)
        .then(console.log("Deleted", person));
      setPersons(persons.filter((person) => person.id !== personToDelete.id));
    } else {
      console.log("Deleting", personToDelete.name, "not confirmed")
    }
  };
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={() => handleDelete(person)}>delete</button>
    </p>
  );
};

const Persons = ({ searchName, persons, setPersons }) => {
  const filterByName = (person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  };

  return (
    <>
      {persons.filter(filterByName).map((person) => (
        <Person
          key={person.name}
          person={person}
          persons={persons}
          setPersons={setPersons}
        />
      ))}
    </>
  );
};

export default Persons;
