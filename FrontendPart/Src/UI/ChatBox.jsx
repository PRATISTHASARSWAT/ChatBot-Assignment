import styled from "styled-components";
import LeftChatBox from "./LeftChatBox";
import RightChatBox from "./RightChatBox";

const BoxStyled = styled.div`
  /* border: var(--color-secondary) 1px solid;
  border-radius: 10px; */
  padding: 0.8rem 1.2rem;
  overflow: scroll;
  scrollbar-width: none;
`;

function ChatBox({ chats }) {
  return (
    <BoxStyled className="chat-box">
      {chats.map((chat, i) => {
        if (chat.identity === "user") {
          return <RightChatBox key={i}>{chat.content}</RightChatBox>;
        } else return <LeftChatBox key={i}>{chat.content}</LeftChatBox>;
      })}
    </BoxStyled>
  );
}

export default ChatBox;
