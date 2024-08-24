import styled, { css } from "styled-components";

const color = {
  primary: css`
    background-color: var(--color-primary);
  `,
  secondary: css`
    background-color: var(--color-secondary);
  `,
};
const StyledBox = styled.div`
  ${(props) => color[props.color]}

  max-width: 40%;

  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 5px;
  font-size: 1.2rem;
`;

function Box({ children, color }) {
  return (
    <StyledBox color={color}>
      <div
        style={{
          fontSize: "1rem",
          marginBottom: "0.4rem",
        }}
      >
        <p>{color === "primary" ? "User.." : "Bot.."}</p>
      </div>
      {children}
    </StyledBox>
  );
}

export default Box;
