import { FaSearch } from "react-icons/fa";

// Controlled search input. The actual debounce + API call lives in
// MovieListing (the page), this component just reports every keystroke.
const SearchBar = ({ value = "", onChange = () => {} }) => {
  return (
    <label className="input input-bordered flex items-center gap-2 w-full max-w-md shadow-sm rounded-full">
      <FaSearch className="text-base-content/40 shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        className="grow"
        aria-label="Search for a movie or show"
      />
    </label>
  );
};

export default SearchBar;
