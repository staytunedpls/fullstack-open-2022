import { useState } from "react";

const Person = ({name}) => {
  return <p>{name}</p>
}

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.map(person => person.name).includes(newName)) {
      console.log(`Attempted to add duplicate name ${newName}`);
      alert(`Person ${newName} already exists` );
      return
    }
    const person = {
      name: newName
    }
    console.log(person);
    setPersons(persons.concat(person));
    setNewName("")
  }

  const handleNameChange = (event) => {
    console.log("Current input field contents", event.target.value);
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.name} name={person.name} />)}    
    </div>
  );
};

export default App;
