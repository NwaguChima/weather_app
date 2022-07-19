import "./App.css";
import Search from "./components/search/Search";

function App() {
  const handleSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
    </div>
  );
}

export default App;
