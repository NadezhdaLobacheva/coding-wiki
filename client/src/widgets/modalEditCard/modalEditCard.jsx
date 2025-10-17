import { useState } from "react";
import axiosInstance from "../../shared/lib/axiosInstance";

export default function ModalEditCard({ content, onClose, onSave }) {
  const [form, setForm] = useState({
    title: content.word,
    description: content.desc,
    tags: content.tags.map((tag) => tag.desc).join(" "),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.put(`/contents/${content.id}`, {
        word: form.title,
        desc: form.description,
        tags: form.tags,
      });
      onSave(res.data.data);
      onClose();
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Редактировать слово</h2>

        <label style={styles.label}>Заголовок</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          style={styles.input}
        />

        <label style={styles.label}>Описание</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          style={{
            ...styles.input,
            minHeight: "150px",
            resize: "vertical",
            overflowY: "auto",
            lineHeight: "1.4",
            width: "100%",
          }}
        />

        <label style={styles.label}>Теги (через пробел)</label>
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.buttons}>
          <button onClick={onClose} style={styles.cancelBtn}>
            Отмена
          </button>
          <button onClick={handleSubmit} style={styles.saveBtn}>
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "500px",
    maxHeight: "90vh",
    overflowY: "auto", 
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignItems: "center", 
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
    textAlign: "center",
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "8px",
    resize: "both",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  cancelBtn: {
    padding: "8px 16px",
    backgroundColor: "#eee",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  saveBtn: {
    padding: "8px 16px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
