import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Search from "./components/search/Search";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
