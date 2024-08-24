import styled, { css } from "styled-components";
import Logo from "../ui/Logo";
import ChatBox from "../ui/ChatBox";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { useState } from "react";

const AppLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr auto;
  justify-content: center;
  height: 100vh;
  max-width: 50rem;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;

  margin: 0.2rem auto;
  color: #0000007c;
`;

function AppLayout() {
  const [chats, setChats] = useState([
    { content: "Hi", identity: "user" },
    { content: "Hello", identity: "bot" },
  ]);
  function clearChats() {
    setChats([]);
  }
  return (
    <AppLayoutStyled>
      <Logo />
      <Heading>Welcome to Stone Canyon</Heading>
      <ChatBox chats={chats} />
      <TextArea updateChatBox={setChats} />
      <Button onClick={clearChats}>Clear Chat</Button>
    </AppLayoutStyled>
  );
}

export default AppLayout;
