import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryDetail() {
  const [countryData, setCountryData] = useState();
  const { code } = useParams();

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/alpha/${code}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    )
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((err) => console.error(err));
  }, [code]);

  return (
    <>
      {countryData && (
        <div className="container m-auto p-4">
          <Link
            to="/"
            className="bg-white py-2 px-4 inline-block mb-8 rounded hover:scale-105 transition-all dark:bg-slate-700 dark:text-slate-100 "
          >
            &larr; Back
          </Link>
          <div className="dark:text-slate-100">
            <img
              src={countryData.flags.svg}
              alt={`Flag of ${countryData.name.common}`}
              className="w-1/2 max-w-80 block m-auto mb-8"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {countryData.name.common}
              </h2>
              <ul className="flex flex-col gap-1">
                <li>
                  <span className="font-semibold">Native name: </span>
                  {Object.values(countryData.name.nativeName)[0].common}
                </li>
                <li>
                  <span className="font-semibold">Population: </span>
                  {countryData.population.toLocaleString()}
                </li>
                <li>
                  <span className="font-semibold">Region: </span>
                  {countryData.region}
                </li>
                <li>
                  <span className="font-semibold">Sub region: </span>
                  {countryData.subregion}
                </li>
                <li>
                  <span className="font-semibold">Capital: </span>
                  {countryData.capital.join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Top level domain: </span>
                  {countryData.tld}
                </li>
                <li>
                  <span className="font-semibold">Currencies: </span>
                  {Object.keys(countryData.currencies).join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Languages: </span>
                  {Object.values(countryData.languages).join(", ")}
                </li>
                <li>
                  <span className="font-semibold">Bordering countries: </span>
                  <br />
                  {!countryData.borders.length > 0
                    ? "None"
                    : countryData.borders.map((borderCode) => (
                        <Link
                          to={`/country/${borderCode}`}
                          key={borderCode}
                          className="py-1 px-2 inline-block bg-white rounded mr-2 dark:text-slate-700  transition-all hover:scale-105"
                        >
                          {borderCode}
                        </Link>
                      ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CountryDetail;
