import { BsBackspace } from "react-icons/bs";
const BackHome = () => {
  return (
    <div style={{ marginTop: "15px", display: "flex" }}>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "5px",
        }}
      >
        <BsBackspace />
      </p>
      <a href="/">Back Home</a>
    </div>
  );
};

export default BackHome;
