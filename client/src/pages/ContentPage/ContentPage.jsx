import { useState, useEffect } from "react";
import WordCard from "../../widgets/WordCard/WordCard";

export default function ContentPage({ user }) {
  const [content, setContent] = useState([]);

  async function getContent() {
    try {
      const response = await fetch(import.meta.env.VITE_API + "/contents");
      const result = await response.json();

      if (response.status === 200) setContent(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div style={{ display: "flex", gap: 12, marginTop: 25 }}>
      {content.map((word) => (
        <WordCard key={word.id} data={word} user={user} />
      ))}
    </div>
  );
}
