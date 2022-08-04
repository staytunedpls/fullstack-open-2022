import "./index.css";

import { useState, useEffect } from "react";
import personService from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const Notification = ({ message, notificationType }) => {
  const notification_class = `notification ${notificationType}`;
  if (message === null) {
    return null;
  } else {
    return <div className={notification_class}>{message}</div>;
  }
};

const App = () => {
  useEffect(() => {
    console.log("Event started");
    personService
      .getAll()
      .then((allPersons) => {
        console.log("Response:", allPersons);
        setPersons(allPersons);
      })
      .catch((error) => {
        console.log(
          "Getting all persons from server failed, got error:",
          error
        );
        setNotificationMessage(
          `Getting all persons from server failed, got error: ${error}`
        );
        setNotificationType("error");
        setTimeout(() => setNotificationMessage(null), 5000);
      });
  }, []);

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setNewSearch] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState("success");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.map((person) => person.name).includes(newName)) {
      console.log(`Person with name ${newName} already exists`);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const existingPersonId = persons.find(
          (person) => person.name === newName
        ).id;
        personService
          .updateExisting(existingPersonId, newPerson)
          .then((returnedPerson) => {
            console.log(
              "Replaced old entry with name",
              returnedPerson.name,
              "with new entry",
              returnedPerson
            );
            setPersons(
              persons.map((person) =>
                person.name !== returnedPerson.name ? person : returnedPerson
              )
            );
            setNotificationMessage(`Changed ${returnedPerson.name}`);
            setNotificationType("success");
            setTimeout(() => setNotificationMessage(null), 5000);
          })
          .catch((error) => {
            console.log(
              "Could not change person",
              newPerson,
              ", got error:",
              error.response.data.error
            );
            setNotificationMessage(error.response.data.error);
            setNotificationType("error");
            setTimeout(() => setNotificationMessage(null), 5000);
          });
      } else {
        console.log(`Replacing of ${newName} not confirmed`);
      }
    } else {
      personService
        .createNew(newPerson)
        .then((returnedPerson) => {
          console.log("Created new", returnedPerson);
          setPersons(persons.concat(returnedPerson));
          setNotificationMessage(`Added ${returnedPerson.name}`);
          setNotificationType("success");
          setTimeout(() => setNotificationMessage(null), 5000);
        })
        .catch((error) => {
          console.log(
            "Could not add new person",
            newPerson,
            ", got error:",
            error.response.data.error
          );
          setNotificationMessage(error.response.data.error);
          setNotificationType("error");
          setTimeout(() => setNotificationMessage(null), 5000);
        });
    }
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
      <Notification
        message={notificationMessage}
        notificationType={notificationType}
      />
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
      <Persons
        searchName={searchName}
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        setNotificationType={setNotificationType}
      />
    </div>
  );
};

export default App;
