import styled from "styled-components";

const StyledLogo = styled.div`
  background-color: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.8rem;
  margin: 1.2rem 0;
  & img {
    width: 16rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.jpg" />
    </StyledLogo>
  );
}

export default Logo;
