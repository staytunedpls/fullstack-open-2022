import { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons"


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
      <Filter value={searchName} handleChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName}/>
    </div>
  );
};

export default App;
