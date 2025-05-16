import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import styles from "./Filter.module.css";

function Filter() {
  const options = [
    { value: "all", label: "All" },
    { value: "2", label: "last 2 days" },
    { value: "5", label: "last 5 days" },
    { value: "1", label: "last week" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("last") || "all";

  function handleClick(value) {
    searchParams.set("last", value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          type={currentFilter === option.value ? "active" : "secondary"}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
