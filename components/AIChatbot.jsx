import { useState } from "react";
import { askGemini } from "../services/gemini";

function AIChatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question.trim()) return;

    setAnswer("Thinking...");

    const reply = await askGemini(question);

    setAnswer(reply);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "320px",
        background: "white",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 0 15px rgba(0,0,0,.2)",
        zIndex: 1000,
      }}
    >
      <h3>🤖 Campus AI</h3>

      <textarea
        rows="4"
        style={{ width: "100%" }}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask anything..."
      />

      <button
        onClick={handleAsk}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      <p style={{ marginTop: "15px" }}>{answer}</p>
    </div>
  );
}

export default AIChatbot;