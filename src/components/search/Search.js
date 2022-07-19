import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleSearch = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for a country..."
      doubounceTimeout={500}
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Search;
