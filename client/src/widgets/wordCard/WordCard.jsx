import Card from "react-bootstrap/Card";

export default function WordCard({ data, user }) {
  const showEditButtons = user?.data?.isAdmin || user?.data?.id === data.user_id;

  console.log(user);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{data.word}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">#recursion</Card.Subtitle>
        <Card.Text>{data.desc}</Card.Text>
        {showEditButtons && (
          <>
            <Card.Link href="#">Редактировать</Card.Link>
            <Card.Link href="#">Удалить</Card.Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
