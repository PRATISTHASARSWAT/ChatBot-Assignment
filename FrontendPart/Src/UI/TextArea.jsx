import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { getAns } from "../services/getAns";

const InputBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border: var(--color-primary) 2px solid;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const StyledInput = styled.textarea`
  --accent-color: #fff;
  --accent-color-2: #f7f7f7;

  position: relative;
  width: 100%;
  height: fit-content;
  resize: none;
  scrollbar-width: none;

  border: none;
  outline: none;

  border-radius: 10px;

  color: #1312129c;
  margin: 0.2rem 0;
  padding: 0.2rem 0.4rem;
`;

const SendButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  border-radius: 10px;
  padding: 0.4rem 0.4rem;
  cursor: pointer;

  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;

  transition: all 0.3ms;

  &:hover {
    transform: scale(1.05);
  }
`;
function TextArea({ updateChatBox }) {
  const [chatInput, setChatInput] = useState("");
  const [isReq, setIsReq] = useState(false);
  const textArea = useRef(null);
  useEffect(
    function () {
      async function updateChats() {
        const res = await getAns(chatInput);

        updateChatBox((currChats) => [
          ...currChats,
          { content: res.data.answer, identity: "bot" },
        ]);
      }

      if (isReq) {
        console.log("requesting...");
        updateChats();
        console.log("rq completed");
        setIsReq(false);
      }
    },
    [isReq]
  );

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    sendMsgHandler();
  }
  function sendMsgHandler() {
    textArea.current.value = "";
    updateChatBox((currChats) => [
      ...currChats,
      { content: chatInput, identity: "user" },
    ]);

    setIsReq(true);
  }

  function updateInput(e) {
    const curInput = e.target.value;
    setChatInput(curInput);
  }
  return (
    <InputBox>
      <StyledInput
        placeholder="enter your query"
        ref={textArea}
        onChange={updateInput}
        onKeyDown={handleKeyDown}
      />
      <SendButton onClick={sendMsgHandler} disabled={chatInput.length < 2}>
        <IoMdSend style={{ color: "#fff", fontSize: "4rem" }} />
      </SendButton>
    </InputBox>
  );
}

export default TextArea;
