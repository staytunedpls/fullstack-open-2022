import personService from "../services/persons";

const Person = ({
  person,
  persons,
  setPersons,
  setNotificationMessage,
  setNotificationType,
}) => {
  const handleDelete = (personToDelete) => {
    console.log("Initiating deleting", personToDelete);
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .deletePerson(personToDelete.id)
        .then((response) => {
          console.log("Deleted", personToDelete);
          setPersons(
            persons.filter((person) => person.id !== personToDelete.id)
          );
          setNotificationMessage(`Deleted ${personToDelete.name}`);
          setNotificationType("success");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        })
        .catch((error) => {
          console.log("Could not delete", personToDelete);
          setNotificationMessage(`Could not delete ${personToDelete.name}`);
          setNotificationType("error");
          setTimeout(() => {
            setNotificationMessage(null);
          }, 5000);
        });
    } else {
      console.log("Deleting", personToDelete.name, "not confirmed");
    }
  };
  return (
    <p>
      {person.name} {person.number}{" "}
      <button onClick={() => handleDelete(person)}>delete</button>
    </p>
  );
};

const Persons = ({
  searchName,
  persons,
  setPersons,
  setNotificationMessage,
  setNotificationType,
}) => {
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
          setNotificationMessage={setNotificationMessage}
          setNotificationType={setNotificationType}
        />
      ))}
    </>
  );
};

export default Persons;
