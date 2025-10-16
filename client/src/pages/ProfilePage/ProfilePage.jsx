import { useState, useEffect, useCallback } from "react";
import WordCard from "../../widgets/WordCard/WordCard";

export default function ProfilePage({ user }) {
  const [words, setWords] = useState([]);

  async function getContent() {
    try {
      const response = await fetch(
        import.meta.env.VITE_API + `/contents/user/${user?.data.id}`
      );
      const result = await response.json();

      if (response.status === 200) setWords(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContent();
  }, [user]);

  if (!words.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        У Вас пока нет созданных записей
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: 12, margin: 25, flexWrap: "wrap" }}>
      {words.map((word) => (
        <WordCard key={word.id} data={word} user={user} />
      ))}
    </div>
  );
}
