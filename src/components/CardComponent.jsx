import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const CardComponent = () => {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src="data:image/jpeg;base64,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" // reemplaza con la imagen que desees
          alt="Dianna"
          style={styles.image}
        />
      </div>
      <h2 style={styles.name}>Dianna</h2>
      <p style={styles.description}>
        Has maiorum habemus detraxit at. Timeam fabulas splendide et his. Usu
        nullam dolorum quaestio ei, sit vidit facilisis ea. Per ne impedit
        iracundia neglegentur.
      </p>
      <div style={styles.buttons}>
        <button style={styles.followButton}>Follow</button>
        <button style={styles.iconButton}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "300px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },
  name: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  iconButton: {
    backgroundColor: "#E0E0E0",
    padding: "10px",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default CardComponent;
