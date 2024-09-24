import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loader_light from "./assets/loader_light.svg";
import loader_dark from "./assets/loader_dark.svg";

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Using a delay to simulate a heavy request
    setTimeout(() => {
      fetch(
        `https://restcountries.com/v3.1/independent?fields=name,population,flags,region,capital,cca3`
      )
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .then(() => setIsLoading(false))
        .catch((err) => console.error(err));
    }, 1500);
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setRegion("All");
  };

  const filteredCountries = countries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    const queryText = query.toLowerCase().trim();
    return (
      (country.region === region || region === "All") &&
      countryName.includes(queryText)
    );
  });

  return (
    <>
      <div className="container flex justify-between items-center m-auto p-4 flex-wrap gap-4">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search"
          className="border border-gray-300 px-3 py-2 rounded-lg dark:bg-slate-700 dark:text-slate-100 transition-colors"
        />
        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-lg dark:bg-slate-700 dark:text-slate-100 transition-colors"
        >
          <option value="All">All</option>
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap container justify-center m-auto gap-x-4 gap-y-8 p-4 pb-24">
        {isLoading && (
          <img
            src={localStorage.theme === "dark" ? loader_dark : loader_light}
            alt=""
            className="w-16 h-16 m-auto"
          />
        )}
        {filteredCountries.map((country) => (
          <Link
            to={`/country/${country.cca3}`}
            key={country.name.common}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-36 sm:w-44 flex flex-col justify-between transition-all hover:scale-105 dark:bg-slate-700 dark:text-slate-100"
          >
            <img src={country.flags.svg} alt="" className="shadow-lg block" />
            <div className="text-center p-4">
              <h2 className="font-bold text-xl mb-6">{country.name.common}</h2>
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  <span className="font-semibold">Population: </span>
                  <br /> {country.population.toLocaleString()}
                </li>
                <li>
                  <span className="font-semibold">Region: </span>
                  <br />
                  {country.region}
                </li>
                <li>
                  <span className="font-semibold">Capital: </span>
                  <br />
                  {country.capital[0]}
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CountriesList;
