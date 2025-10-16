import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import debounce from "lodash/debounce";
import WordCard from "../../widgets/WordCard/WordCard";

export default function ContentPage({ user }) {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [sortDirection, setSortDirection] = useState(null);

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
    words.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      if (sortDirection === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
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
          <Button variant="secondary" size="sm">
            По дате
          </Button>
          <Button onClick={handleSortTags} variant="secondary" size="sm">
            По кол-ву тегов
          </Button>
        </div>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}
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
