import toast from "react-hot-toast";
import { useState } from "react";
import { FormEvent, ChangeEvent } from "react";
import { SearchFormProps } from "./SearchBar.types";
import css from "./SearchBar.module.css";

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSearch(trimmedSearchTerm);
    setSearchTerm("");
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleFormSubmit} className={css.formContainer}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleInputChange}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchForm;