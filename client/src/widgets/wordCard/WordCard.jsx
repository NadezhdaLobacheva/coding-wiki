import { useNavigate } from "react-router";
import Card from "react-bootstrap/Card";

export default function WordCard({ data, user }) {
  const navigate = useNavigate();

  const showEditButtons =
    user?.data?.isAdmin || user?.data?.id === data.user_id;

  const formattedTags = data.tags.map((tag) => `#${tag.desc}`).join(" ");
  const formattedDateCreated = new Date(data.createdAt).toLocaleDateString(
    "ru-RU"
  );
  const formattedDateUpdated = new Date(data.createdAt).toLocaleDateString(
    "ru-RU"
  );

  async function handleDelete(id) {
    try {
      const response = await fetch(
        import.meta.env.VITE_API + `/contents/${id}`,
        {
          method: "DELETE",
        }
      );

      if (window.location.pathname === "/profile") {
        window.location.reload();
      } else {
        navigate("/");
      }

      if (response.status === 200) {
        return true;
      } else {
        console.log("Ошибка при удалении");
        return false;
      }
    } catch (error) {
      console.log("Ошибка сети:", error);
    }
  }

  return (
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
            <Card.Title>{data.word}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {formattedTags}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Text style={{ marginTop: 30 }}>{data.desc}</Card.Text>
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
                className="text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                Редактировать
              </Card.Link>
              <Card.Link
                onClick={() => handleDelete(data.id)}
                className="text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                Удалить
              </Card.Link>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
