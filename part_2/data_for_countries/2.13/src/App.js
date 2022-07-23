import { useState, useEffect } from "react";
import axios from "axios";

const SearchField = (props) => {
  return <input value={props.searchTerm} onChange={props.onChange} />;
};

const CountryEntry = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="Country flag" />
    </>
  );
};

const ShowCountryButton = ({ country, setSearchTerm }) => {
  const handleClick = () => {
    setSearchTerm(country.name.common)
  }
  return <button type="button" onClick={handleClick}>show</button>
}

const CountryListEntry = ({ country, setSearchTerm }) => {
  return <li>{country.name.common} <ShowCountryButton country={country} setSearchTerm={setSearchTerm}/></li>;
};

const CountryList = ({ countries, setSearchTerm }) => {
  return (
    <ul>
      {countries.map((country) => (
        <CountryListEntry key={country.name.common} country={country} setSearchTerm={setSearchTerm}/>
      ))}
    </ul>
  );
};

const SearchResults = ({ countries, searchTerm, setSearchTerm }) => {
  const eligible_countries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (eligible_countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (eligible_countries.length > 1) {
    return <CountryList countries={eligible_countries} setSearchTerm={setSearchTerm}/>;
  } else if (eligible_countries.length === 1) {
    return <CountryEntry country={eligible_countries[0]} />;
  } else if (eligible_countries.length === 0) {
    return <p>No country matches search</p>;
  }
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);

  const getCountriesHook = () => {
    console.log("Countries hook");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("Retrived countries from server:", response.data.length);
      setCountries(response.data);
    });
  };
  useEffect(getCountriesHook, []);

  const handleSearchChange = (event) => {
    console.log("Current search term: ", event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <SearchField searchTerm={searchTerm} onChange={handleSearchChange} />
      <SearchResults countries={countries} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </>
  );
};

export default App;
