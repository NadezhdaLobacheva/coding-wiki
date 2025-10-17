import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function WordAddForm({ user }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const targetData = event.target;
      const formData = new FormData(targetData);
      const dataForApi = {
        ...Object.fromEntries(formData),
        user_id: user.data.id,
      };

      if (!dataForApi.word || !dataForApi.desc || !dataForApi.tags)
        return alert("Заполните все поля");

      const response = await fetch(import.meta.env.VITE_API + `/contents/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForApi),
      });

      if (response.status === 201) {
        targetData.reset();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        margin: "20px auto",
      }}
    >
      <Form.Control type="text" placeholder="Введите название" name="word" />
      <Form.Control
        as="textarea"
        row={8}
        placeholder="Введите описание"
        name="desc"
      />
      <Form.Control
        type="text"
        placeholder="Введите теги (через пробел или запятую)"
        name="tags"
      />
      <Button
        style={{
          backgroundColor: "#093d76ff",
          border: "none",
          color: "1e90ff",
        }}
        type="submit"
      >
        Сохранить
      </Button>
    </Form>
  );
}
