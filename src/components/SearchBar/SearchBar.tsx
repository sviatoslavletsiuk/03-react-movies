import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  // Функція для атрибуту action (React 19 Form Actions)
  const handleFormAction = (formData: FormData) => {
    const query = formData.get("query") as string;

    if (!query || query.trim() === "") {
      toast.error("Search field is empty!");
      return;
    }

    // Викликаємо проп із обрізаним запитом
    onSubmit(query.trim());

    // ВАЖЛИВО: form.reset() ПРИБРАНО.
    // React автоматично скине форму після завершення цієї функції.
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
            name="query" // Обов'язково для FormData
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
