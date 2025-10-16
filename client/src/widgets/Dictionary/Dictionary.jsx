import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

export default function Dictionary() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [sortedContents, setSortedContents] = useState([]);
  const [sortedTags, setSortedTags] = useState([]);
  const [error, setError] = useState("");
  const [order, setOrder] = useState("DESC");

  // Дебаунс-функция поиска
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/contents/search?q=${query}`
        );
        const data = await res.json();
        if (res.ok && data.length > 0) {
          setResult(data[0]);
          setError("");
          setSortedContents([]);
          setSortedTags([]);
        } else {
          setResult(null);
          setError("Слово не найдено.");
        }
      } catch (err) {
        console.error(err);
        setError("Ошибка при поиске.");
      }
    }, 500),
    []
  );

  // Очистка debounce при размонтировании
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Обработчик изменения ввода
  const changeHandler = (event) => {
    const value = event.target.value;
    setInput(value);
    debouncedSearch(value);
  };

  const handleSortWords = async () => {
    try {
      const nextOrder = order === "DESC" ? "ASC" : "DESC";
      setOrder(nextOrder);
      const res = await fetch(
        `http://localhost:3000/api/contents/sortByDate?order=${nextOrder}`
      );
      const data = await res.json();
      setSortedContents(data);
      setResult(null);
      setSortedTags([]);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Ошибка при сортировке слов.");
    }
  };

  const handleSortTags = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/tags/sortByContentCount?order=DESC`
      );
      const data = await res.json();
      setSortedTags(data.data);
      setResult(null);
      setSortedContents([]);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Ошибка при сортировке тегов.");
    }
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <div>
        <input type="text" value={input} onChange={changeHandler} />
        <button onClick={() => debouncedSearch(input)}>Поиск</button>
        <button onClick={handleSortWords}>
          Сортировать слова по дате ({order})
        </button>
        <button onClick={handleSortTags}>Сортировать теги по количеству</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && (
        <div>
          <p>
            <b>Слово:</b> {result.word}
          </p>
          <p>
            <b>Описание:</b> {result.desc}
          </p>
          {result.tags?.length > 0 && (
            <div>
              <p>
                <b>Теги:</b>
              </p>
              <ul>
                {result.tags.map((tag) => (
                  <li key={tag.id}>{tag.desc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {Array.isArray(sortedContents) && sortedContents.length > 0 && (
        <div>
          <h3>Отсортированные слова:</h3>
          <ul>
            {sortedContents.map((item) => (
              <li key={item.id}>
                <b>{item.word}</b>: {item.desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {Array.isArray(sortedTags) && sortedTags.length > 0 && (
        <div>
          <h3>Отсортированные теги:</h3>
          <ul>
            {sortedTags.map((tag) => (
              <li key={tag.id}>
                {tag.desc} — слов: {tag.wordCount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
