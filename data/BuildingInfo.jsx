function BuildingInfo({ building }) {
  if (!building) return null;

  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "700px",
        padding: "20px",
        borderRadius: "10px",
        background: "#f5f5f5",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2>{building.name}</h2>

      <p><strong>Floor:</strong> {building.floor}</p>

      <p><strong>Timing:</strong> {building.timing}</p>

      <p><strong>Contact:</strong> {building.contact}</p>

      <p>{building.description}</p>
    </div>
  );
}

export default BuildingInfo;