import { useState } from "react";

const Person = (person) => {
  return <p>{person.name} {person.number}</p>
}

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      console.log(`Attempted to add duplicate name ${newName}`);
      alert(`Person ${newName} already exists` );
      return
    }
    const person = {
      name: newName,
      number: newNumber
    }
    console.log(person);
    setPersons(persons.concat(person));
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log("Current input name contents", event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log("Current input number contents", event.target.value);
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
