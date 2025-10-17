import { useState, useEffect, useCallback } from "react";
import { Hash, Calendar2 } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import debounce from "lodash/debounce";
import WordCard from "../../widgets/WordCard/WordCard";
import WordAddForm from "../../widgets/WordAddForm/WordAddForm";

export default function ContentPage({ user }) {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [sortDirection, setSortDirection] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  async function getContent() {
    try {
      const response = await fetch(import.meta.env.VITE_API + "/contents");
      const result = await response.json();

      if (response.status === 200) setWords(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/contents/search?q=${query}`
        );

        const data = await res.json();

        if (res.ok && data.length > 0) {
          setWords(data);
          setError("");
        } else {
          setWords([]);
          setError("Слово не найдено");
        }
      } catch (err) {
        console.error(err);
        setError("Ошибка при поиске");
      }
    }, 500),
    []
  );

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleSortTags = () => {
    if (sortDirection === null || sortDirection === "desc") {
      words.sort((a, b) => a.tags.length - b.tags.length);
      setSortDirection("asc");
    } else {
      words.sort((a, b) => b.tags.length - a.tags.length);
      setSortDirection("desc");
    }
  };

  const handleSortDate = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    words.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (newDirection === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  };

  const handleFormOpen = () => {
    setIsFormOpen((prev) => !prev);
  };

  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div style={{ margin: 25 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <Form.Control
          type="text"
          placeholder="Поиск"
          value={input}
          onChange={handleInput}
        />
        <div style={{ display: "flex", gap: 6 }}>
          <Button onClick={handleSortDate} variant="secondary" size="sm">
          date
          </Button>
          <Button onClick={handleSortTags} variant="secondary" size="sm">
            <Hash />
          </Button>
        </div>
      </div>
      {error && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: 20,
            color: "red",
          }}
        >
          {error}
        </div>
      )}
      {user.status === "logged" && (
        <div>
          <Button
            onClick={handleFormOpen}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 20,
              width: "100%",
            }}
            variant="secondary"
          >
            Добавить запись
          </Button>
        </div>
      )}

      {isFormOpen && <WordAddForm user={user} />}
      <div
        style={{ display: "flex", gap: 12, marginTop: 25, flexWrap: "wrap" }}
      >
        {words.map((word) => (
          <WordCard key={word.id} data={word} user={user} />
        ))}
      </div>
    </div>
  );
}
