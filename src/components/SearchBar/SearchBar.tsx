import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  // Функція для атрибуту action
  const handleFormAction = (formData: FormData) => {
    const query = formData.get("query") as string;

    if (!query.trim()) {
      toast.error("Search field is empty!");
      return;
    }

    onSubmit(query.trim());

    // Очищення форми (традиційний спосіб для Form Actions)
    const form = document.querySelector(`.${s.form}`) as HTMLFormElement;
    form?.reset();
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="/" className={s.link}>
          MovieSearch
        </a>
        <form className={s.form} action={handleFormAction}>
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
