/* eslint-disable react/prop-types */
import styled from "styled-components";

const ButtonStyled = styled.button`
  ${(props) => props.style}

  max-width: max-content;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.4rem 0.6rem;
  margin: 0.4rem auto;
  cursor: pointer;

  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 400;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

function Button({ style, children, icon, onClick }) {
  return (
    <ButtonStyled style={style} onClick={onClick}>
      <span>{icon ? icon : ""}</span> {children}
    </ButtonStyled>
  );
}

export default Button;
