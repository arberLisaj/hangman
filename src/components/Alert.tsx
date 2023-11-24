import { useEffect } from "react";

interface Props {
  handleClick: () => void;
  message: string;
  word: string;
}

function Alert({ handleClick, message, word }: Props) {
  function handleEscKey(e: KeyboardEvent) {
    if (e.key == "Escape") handleClick();
  }
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        backgroundColor: "#b7b7b7a7",
        width: "100%",
        zIndex: 999,
        display: "grid",
        placeContent: "center",
        color: "#333",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "fit-content",
          padding: "25px 80px",
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 style={{ fontWeight: 500 }}>{message}</h1>
        <p style={{ marginBlock: "5px 10px" }}>
          Correct word was {word.toUpperCase()}
        </p>
        <button
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            display: "block",
            marginInline: "auto",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#00308F",
            color: "white",
          }}
          onClick={handleClick}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Alert;
