import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Sidebar";
import Message from "./Message";
import { useCities } from "../context/CitiesContext";

const CountryList = () => {
  const { cities, isLoading } = useCities();

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message={"You can add a new city by clicking on the map !"} />
    );
  }

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
