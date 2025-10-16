import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

function ContentPage() {
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
    <div
      style={{
        display: "flex",
        gap: 12,
        marginTop: 16,
      }}
    >
      {content.map((word) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{word.word}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                #recursion
              </Card.Subtitle>
              <Card.Text>{word.desc}</Card.Text>
              <Card.Link href="#">Редактировать</Card.Link>
              <Card.Link href="#">Удалить</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ContentPage;
