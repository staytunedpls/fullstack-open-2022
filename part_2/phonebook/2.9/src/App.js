import { useState } from "react";

const Person = (person) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setNewSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      console.log(`Attempted to add duplicate name ${newName}`);
      alert(`Person ${newName} already exists`);
      return;
    }
    const person = {
      name: newName,
      number: newNumber,
    };
    console.log(person);
    setPersons(persons.concat(person));
    setNewName("");
    setNewNumber("");
  };

  const filterByName = (person) => {
    return person.name.toLowerCase().includes(searchName.toLowerCase());
  };

  const handleSearchChange = (event) => {
    console.log("Current input search contents", event.target.value);
    setNewSearch(event.target.value);
  };

  const handleNameChange = (event) => {
    console.log("Current input name contents", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log("Current input number contents", event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input type="text" value={searchName} onChange={handleSearchChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(filterByName).map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
