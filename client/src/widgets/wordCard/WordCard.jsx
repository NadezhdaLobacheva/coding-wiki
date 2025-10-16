import Card from "react-bootstrap/Card";

export default function WordCard({ data, user }) {
  const showEditButtons =
    user?.data?.isAdmin || user?.data?.id === data.user_id;

  const formattedTags = data.tags.map((tag) => `#${tag.desc}`).join(" ");
  const formattedDateCreated = new Date(data.createdAt).toLocaleDateString(
    "ru-RU"
  );
  const formattedDateUpdated = new Date(data.createdAt).toLocaleDateString(
    "ru-RU"
  );

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
              <Card.Link href="#">Редактировать</Card.Link>
              <Card.Link href="#">Удалить</Card.Link>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
