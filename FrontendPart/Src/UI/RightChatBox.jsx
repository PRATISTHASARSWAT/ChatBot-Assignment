import Box from "./Box";

function RightChatBox({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div></div>
      <Box color={"primary"}>{children}</Box>
    </div>
  );
}

export default RightChatBox;
