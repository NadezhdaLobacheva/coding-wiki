import { useNavigate } from "react-router";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ModalEditCard from "../modalEditCard/modalEditCard";

export default function WordCard({ data, user }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [cardData, setCardData] = useState(data); // локальное состояние для обновления после редактирования

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updated) => {
    setCardData(updated); // обновляем данные карточки после сохранения
    setIsEditing(false);
  };

  const showEditButtons =
    user?.data?.isAdmin || user?.data?.id === cardData.user_id;

  const formattedTags = cardData.tags.map((tag) => `#${tag.desc}`).join(" ");
  const formattedDateCreated = new Date(cardData.createdAt).toLocaleDateString("ru-RU");
  const formattedDateUpdated = new Date(cardData.updatedAt).toLocaleDateString("ru-RU");

  async function handleDelete(id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_API + `/contents/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 200) {
        if (window.location.pathname === "/profile") {
          window.location.reload();
        } else {
          navigate("/");
        }
      } else {
        console.log("Ошибка при удалении");
      }
    } catch (error) {
      console.log("Ошибка сети:", error);
    }
  }

  return (
    <>
      <Card style={{ display: "flex", width: "100%" }}>
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div>
              <Card.Title>{cardData.word}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {formattedTags}
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={{ marginTop: 30 }}>{cardData.desc}</Card.Text>

          {showEditButtons && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <div style={{ fontSize: 10 }}>
                <div>Дата создания: {formattedDateCreated}</div>
                <div>Дата редактирования: {formattedDateUpdated}</div>
              </div>
              <div>
                <Card.Link
                  href="#"
                  onClick={handleEditClick}
                  className="text-decoration-none"
                  style={{ cursor: "pointer",color: "#093d76ff" }}
                >
                  Редактировать
                </Card.Link>
                <Card.Link
                  onClick={() => handleDelete(cardData.id)}
                  className="text-decoration-none"
                  style={{ cursor: "pointer", color: "#ab0606ff" }}
                >
                  Удалить
                </Card.Link>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>

      {isEditing && (
        <ModalEditCard
          content={cardData}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
