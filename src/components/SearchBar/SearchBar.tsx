import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const query = queryInput.value.trim();

    if (!query) {
      toast.error("Search field is empty!");
      return;
    }

    onSubmit(query);
    form.reset(); // Цей рядок очищає поле вводу
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.link}>
          MovieSearch
        </a>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="query"
            placeholder="Search movies..."
            autoFocus
            autoComplete="off"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
